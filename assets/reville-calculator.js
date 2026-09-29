import { Component } from '@theme/component';

/**
 * "What-if" entry calculator: purely a function of the visitor's own slider
 * input, never a claim about real store data — the entries/multiplier math
 * mirrors the price × multiplier mechanic in Reference/CLAUDE.md but tiers
 * shown here are estimates until confirmed (see the section's disclaimer).
 *
 * @typedef {object} Refs
 * @property {HTMLInputElement} slider
 * @property {HTMLElement} handle - Visual redline handle riding the vertical wheel.
 * @property {HTMLElement} spendValue
 * @property {HTMLElement} multiplierValue
 * @property {HTMLElement} nitroFill
 * @property {HTMLElement} carIcon
 * @property {HTMLElement[]} entryDigits
 *
 * @extends Component<Refs>
 */
class ReveilleCalculatorComponent extends Component {
  requiredRefs = ['slider', 'handle', 'spendValue', 'multiplierValue', 'nitroFill', 'carIcon', 'entryDigits'];

  connectedCallback() {
    super.connectedCallback();
    this.sync();
  }

  sync() {
    const { slider, handle, spendValue, multiplierValue, nitroFill, carIcon, entryDigits } = this.refs;

    const min = Number(slider.min);
    const max = Number(slider.max);
    const value = Number(slider.value);
    const percent = max === min ? 0 : (value - min) / (max - min);

    const minMultiplier = Number(this.dataset.minMultiplier) || 1;
    const maxMultiplier = Number(this.dataset.maxMultiplier) || 1;
    const multiplier = minMultiplier + percent * (maxMultiplier - minMultiplier);

    spendValue.textContent = value.toLocaleString('en-US');
    multiplierValue.textContent = multiplier.toFixed(2);

    // Visual handle position on the vertical wheel (offset by half its height).
    handle.style.bottom = `calc(${(percent * 100).toFixed(2)}% - 16px)`;

    // Nitro bar: fill width + heat colour that climbs blue -> amber -> redline.
    nitroFill.style.width = `${Math.round(percent * 100)}%`;
    let heat = '#4cc9f0';
    if (percent > 0.2) heat = '#f77f00';
    if (percent > 0.6) heat = '#ff4d2e';
    nitroFill.style.backgroundColor = heat;

    carIcon.classList.toggle('reville-calc__bar-car--max', value >= max);

    const entries = Math.floor(value * multiplier);
    const digitCount = entryDigits.length;
    const padded = String(entries).padStart(digitCount, '0').slice(-digitCount);

    entryDigits.forEach((digit, i) => {
      digit.textContent = padded[i] ?? '0';
    });
  }
}

customElements.define('reville-calculator-component', ReveilleCalculatorComponent);
