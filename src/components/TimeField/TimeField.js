import { html, LitElement } from '@polymer/lit-element';

const version = false;

class TimeField extends LitElement {
  constructor() {
    super();
    this.editable = false;
  }

  static get properties() {
    return {
      time: Number, // Time in seconds
      editable: Boolean
    }
  }

  _render(props) {
    switch (version) {
      default:
        return html`
          ${this.editable ? html`
            <input type="number" value="${this._computedMinutes}" on-input="${e => this._timeChanged('_minutes', e.target.value)}"></input>
            <input type="number" value="${this._computedSeconds}" on-input="${e => this._timeChanged('_seconds', e.target.value)}"></input>
          ` : html`${this._computedMinutes} : ${this._computedSeconds}`}
        `
    }
  }

  _firstRendered() {
    this._minutes = this._computedMinutes;
    this._seconds = this._computedSeconds;
  }

  get _computedMinutes() {
    return parseInt(this.time / 60, 10).toString().padStart(2, '0')
  }

  get _computedSeconds() {
    return parseInt(this.time % 60, 10).toString().padStart(2, '0')
  }

  _timeChanged(part, value) {
    this[part] = parseInt(value);
    const time = (parseInt(this._minutes) * 60) + parseInt(this._seconds);
    this.dispatchEvent(new CustomEvent('time-changed', { detail: { time: time }, composed: true }));
  }
}

window.customElements.define('time-field', TimeField);