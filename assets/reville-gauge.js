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
 * @property {HTMLElement} counter - The numeric entry-count readout.
 *
 * @extends Component<Refs>
 */
class ReveilleGaugeComponent extends Component {
  requiredRefs = ['arc', 'counter'];

  connectedCallback() {
    super.connectedCallback();

    const target = Number(this.dataset.current) || 0;
    const finalOffset = this.refs.arc.style.strokeDashoffset;

    if (prefersReducedMotion()) return;

    this.refs.arc.style.strokeDashoffset = '1';
    this.refs.counter.textContent = '0';

    let startTime = null;

    const step = (now) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / REVEAL_DURATION_MS, 1);
      const eased = easeOutCubic(progress);

      this.refs.counter.textContent = Math.round(target * eased).toLocaleString('en-US');
      this.refs.arc.style.strokeDashoffset = String(1 - (1 - Number(finalOffset)) * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.refs.counter.textContent = target.toLocaleString('en-US');
        this.refs.arc.style.strokeDashoffset = finalOffset;
      }
    };

    requestAnimationFrame(step);
  }
}

customElements.define('reville-gauge-component', ReveilleGaugeComponent);
