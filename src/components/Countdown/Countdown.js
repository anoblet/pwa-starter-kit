import { BaseElement } from '../BaseElement.js';
import {repeat} from 'lit-html/lib/repeat';

/**
 * API
 * ==========
 * 
 */

export class Countdown extends BaseElement {
  static get properties() {
    return {
      duration: Number,
      icon: Boolean,
      label: Boolean,
      autostart: Boolean,
      _active: Boolean,
      _timeleft: Number,
    }
  }

  constructor(props) {
    super(props);
    this.label = true;
    this.icon = true;
    this.autostart = false;
    this._active = false;
    this._timeleft  = 0;
  }

  // Lifecycle
  _firstRendered(props) {
    if(this.autostart) this.start();
  }

  // Events
  toggle() {
    this._active ? this.pause() : this.start();
    this._active = !this._active;
  }

  getLabel() {
    return this.label ? this._active ? 'Pause' : 'Start' : '';
  }

  getIcon() {
    return this.icon ? this._active ? 'pause' : 'play_arrow' : '';
  }

  pause() {
    clearInterval(this._interval);
    this._interval = false;
  }

  // Timer starts
  start() {
    this._interval = setInterval(() => {
      this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: parseInt(this._timeleft) - 1 }, composed: true }));
    }, 1000);
    // this._active = true;
  }

  stop() {
    clearInterval(this._interval);
    this._interval = false;
    this._active = false;
  }

  reset(time) {
    if (this._interval) this.stop();
    this.dispatchEvent(new CustomEvent('timeleft-changed', { detail: { timeleft: this.duration }, composed: true }));
  }

  /**
   * @duration string
   * @deprecated
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
