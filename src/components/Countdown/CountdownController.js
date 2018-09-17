import { BaseElement } from '../BaseElement.js';

export class CountdownController extends BaseElement {
  static get properties() {
    return {
    }
  }

  // Lifecycle functions
  ready() {
    super.ready();
    this.state = {...this.state,
      duration: this.duration,
      _timeleft: this.duration
    }
    this._computeParts(this.state._timeleft);
  }

  // Events

  start() {
    this._interval = setInterval(() => {
      if (!this.state._timeleft) this.stop();
      else {
        this.state = {
          ...this.state,
          _timeleft: this.state._timeleft-1
        }
        // --this._timeleft;
        this._computeParts(this.state._timeleft);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
  }

  reset() {
    if (this._interval) this.stop();
    this._timeleft = this.duration;
  }

  /**
   * @duration string
   */

  setDuration(duration) {
    this.duration = this.toSeconds(duration);
    this.reset();
  }

  // Helpers

  toSeconds(time) {
    const parts = time.split(':');
    return (parseInt(parts[0]) * 60) + parseInt(parts[1]);
  }

  _computeParts(time) {
    this.state = {
      ...this.state,
      minutes: parseInt(time / 60, 10).toString().padStart(2, '0'),
      seconds: parseInt(time % 60, 10).toString().padStart(2, '0')
    }
  }
}

window.customElements.define('my-countdown', Countdown);
