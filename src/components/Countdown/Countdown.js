import { BaseElement } from '../BaseElement.js';

import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';

export class Countdown extends BaseElement {
  static get properties() {
    return {
      duration: Number,
      timeleft: Number,
      icons: Boolean
    }
  }

  // Lifecycle functions

  // ready() {
  //   super.ready();
  //   this.state = {
  //     ...this.state,
  //     duration: this.duration,
  //     _timeleft: this.duration,
  //     minutes: '00',
  //     seconds: '00'
  //   }
  //   this._computeParts(this.state._timeleft);
  // }

  // _firstRendered() {
  //   this._timeleft = this.duration;
  // }

  // Events

  start() {
    // Set icon
    const icon = this._interval ? 'play_arrow' : 'pause';
    this.shadowRoot.querySelector('#start_pause').icon = icon;

    // Set lavel
    const label = this._interval ? 'Start' : 'Pause';
    this.shadowRoot.querySelector('#start_pause').label = label;

    // Stop the timer

    if (this._interval) this.stop();
    else {
      this._interval = setInterval(() => {
        this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: parseInt(this.timeleft) - 1 }, composed: true }));
      }, 1000);
    }
  }

  stop() {
    clearInterval(this._interval);
    this._interval = false;
  }

  reset() {
    if (this._interval) this.stop();
    this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: this.duration }, composed: true }));
    this._timeleft = this.duration;
    this._computeParts(this._timeleft);
  }

  /**
   * @duration string
   */

  setDuration(duration) {
    // this.duration = this.toSeconds(duration);
    this.state = {
      ...this.state,
      duration: duration,
      _timeleft: duration
    }
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
