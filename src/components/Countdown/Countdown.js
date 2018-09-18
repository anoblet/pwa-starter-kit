import { BaseElement } from '../BaseElement.js';

import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';

export class Countdown extends BaseElement {

  // Properties
  static get properties() {
    return {
      duration: Number,
      timeleft: Number,
      nolabel: Boolean
    }
  }

  // Lifecycle functions

  // Events

  start() {
    console.log('Here');
    // Set icon
    const icon = this._interval ? 'play_arrow' : 'pause';
    this.shadowRoot.querySelector('#start_pause').icon = icon;

    
    // Set label if 'nolabel' is not set
    let label = '';
    if(!this['nolabel']) {
      label = this._interval ? 'Start' : 'Pause';
    }

    // Set a label
    this.shadowRoot.querySelector('#start_pause').label = label;

    // If a timer is running, pause and return
    if (this._interval) {
      this.stop();
      return;
    }

    // Set and start a timer
    this._interval = setInterval(() => {
      this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: parseInt(this.timeleft) - 1 }, composed: true }));
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
    this._interval = false;
  }

  reset(time) {
    if (this._interval) this.stop();
    this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: time }, composed: true }));
    //this._timeleft = this.duration;
    // this._computeParts(this._timeleft);
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
