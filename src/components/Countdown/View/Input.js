import { html } from '@polymer/lit-element';

import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@material/mwc-textfield';

const version = 4;

const style = html`
  <style>
    input {
      border: 0;
      border-bottom: 1px solid #000;
      padding: .45rem;
      margin: .45rem;
      display: block;
    }

    input:focus {
      outline: none;
    }
  </style>
`

export default function ({ state, minutes, seconds }) {
  switch (version) {
    case 1:
      return html`
         ${style}
        <input type="text" value="${this.toString(this._timeLeft)}" on-change="${(e) => this.setDuration(e.target.value)}"></input>
      `
    case 2:
      return html`
        <vaadin-text-field label="Label" value="${this.toString(this._timeLeft)}"></vaadin-text-field>
      `
    case 3:
      return html`
        <time-field minutes="${state.minutes}" seconds="${state.seconds}"></time-field>
      `
    case 4:
      return html`
        <mwc-textfield value="${state.minutes}"></mwc-textfield>
        <mwc-textfield value="${state.seconds}"></mwc-textfield>
      `
    default:
      return html`

      `
  }
}