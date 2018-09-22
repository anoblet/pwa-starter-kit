import { BaseElement } from '../BaseElement.js';
import {repeat} from 'lit-html/lib/repeat';
// import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';



export class Countdown extends BaseElement {

  // Properties
  static get properties() {
    return {
      duration: Number,
      timeleft: Number,
      // nolabel: Boolean,
      active: Boolean,
      icon: Boolean,
      label: Boolean
    }
  }

  constructor(props) {
    super(props);
    this.status = 'stopped';
    this.active = false;
    this.label = true;
    this.icon = true
  }

  // Events
  toggle() {
    this.active ? this.pause() : this.start();
    this.active = !this.active;
    // Set icon
    const icon = this.active ? 'pause' : 'play_arrow';
    //this.shadowRoot.querySelector('#start_pause').icon = icon;

    // If the 'nolabel' attribute is not set, set a label.
    const label = this['nolabel'] ? '' : this.active ? 'Start' : 'Pause';
    //this.shadowRoot.querySelector('#start_pause').label = label;
  }

  getLabel() {
    return this.label ? this.active ? 'Pause' : 'Start' : '';
  }

  getIcon() {
    return this.icon ? this.active ? 'pause' : 'play_arrow' : '';
  }

  pause() {
    clearInterval(this._interval);
  }

  // Timer starts
  start() {
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
