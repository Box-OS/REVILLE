import { Component } from '@theme/component';
import { prefersReducedMotion } from '@theme/utilities';

const REVEAL_DURATION_MS = 1200;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Plays a single, honest reveal of the real entry count and gauge fill on
 * connect: animates FROM zero TO the value already rendered server-side.
 * Never re-fetches or auto-increments — see Reference/CLAUDE.md's ban on
 * fabricated "live" momentum.
 *
 * @typedef {object} Refs
 * @property {SVGPathElement} arc - The gauge's progress arc.
 * @property {HTMLElement[]} digits - The odometer's individual digit tiles, left to right.
 *
 * @extends Component<Refs>
 */
class ReveilleGaugeComponent extends Component {
  requiredRefs = ['arc', 'digits'];

  connectedCallback() {
    super.connectedCallback();

    const target = Number(this.dataset.current) || 0;
    const finalOffset = this.refs.arc.style.strokeDashoffset;
    const digitCount = this.refs.digits.length;

    if (prefersReducedMotion()) return;

    this.refs.arc.style.strokeDashoffset = '1';
    this.#paintDigits(0, digitCount);

    let startTime = null;

    const step = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / REVEAL_DURATION_MS, 1);
      const eased = easeOutCubic(progress);

      this.#paintDigits(Math.round(target * eased), digitCount);
      this.refs.arc.style.strokeDashoffset = String(1 - (1 - Number(finalOffset)) * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.#paintDigits(target, digitCount);
        this.refs.arc.style.strokeDashoffset = finalOffset;
      }
    };

    requestAnimationFrame(step);
  }

  /**
   * @param {number} value
   * @param {number} digitCount
   */
  #paintDigits(value, digitCount) {
    const padded = String(Math.max(0, value)).padStart(digitCount, '0').slice(-digitCount);

    this.refs.digits.forEach((digit, i) => {
      digit.textContent = padded[i] ?? '0';
    });
  }
}

customElements.define('reville-gauge-component', ReveilleGaugeComponent);
