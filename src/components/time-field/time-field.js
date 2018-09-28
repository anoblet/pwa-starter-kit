import { html, LitElement } from '@polymer/lit-element';

const style = html`
   :host { display: block; margin: 1em; } input { text-align: center; } .pad { padding: 0 .5em; }
`

const version = 2;

class TimeField extends LitElement {
  constructor() {
    super();
    this.editable = false;
    this._minutesChanged = this._minutesChanged.bind(this);
    this._durationChanged = this._durationChanged.bind(this);
  }

  static get properties() {
    return {
      time: Number, // Time in seconds
      minutes: String,
      seconds: String,
      editable: Boolean
    }
  }

  _render({ minutes = 0, seconds }) {
    switch (version) {
      case 2:
        return html`
          <style>
            ${style}
          </style>
          ${this.editable ? html`
            <input type="number" value="${this._computedMinutes}" on-input="${e => this._durationChanged(e.target.value)}"></input>
            <input type="number" value="${this._computedSeconds}"></input>
          ` : html`
            ${this._computedMinutes} : ${this._computedSeconds}
          `}
        `
      default:
        return html`
          <style>
            ${style}
          </style>
          <input size="1" name="minutes" value="${this._computedMinutes}" on-change="${(e) => this._minutesChanged(e.target.value)}"/><span class="pad">:</span><input size="1" name="seconds" value="${this._computedSeconds}" on-change="${(e) => this._secondsChanged(e.target.value)}" />
          ${this._computedMinutes} : ${this._computedSeconds}
        `
    }

  }

  get _computedMinutes() {
    return parseInt(this.time / 60, 10).toString().padStart(2, '0')
  }

  get _computedSeconds() {
    return parseInt(this.time % 60, 10).toString().padStart(2, '0')
  }

  // Observers

  _durationChanged(time) {
    this.dispatchEvent(new CustomEvent('duration-changed', { detail: {duration: time}, composed: true }));
  }

  _minutesChanged(value) {
    this.minutes = parseInt(value);
    this._updateTime();
  }

  _secondsChanged(value) {
    this.seconds = parseInt(value);
    this._updateTime();
  }

  _updateTime() {
    const time = (parseInt(this.minutes) * 60) + parseInt(this.seconds);
    this.dispatchEvent(new CustomEvent('time-changed', { detail: { time: time }, composed: true }));
  }

  // Events

  updateTime(part, value) {
    this[part] = parseInt(value);
    this.time = parseInt((this.minutes * 60) + this.seconds);
    // const time = (parseInt(this.minutes) * 60) + parseInt(this.seconds);
    // this.dispatchEvent(new CustomEvent('time-changed', {detail: {value: time}, bubbles: true, composed: true}))
  }
}

window.customElements.define('time-field', TimeField);