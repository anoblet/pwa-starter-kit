import { html } from '@polymer/lit-element';

export default function () {
  return html`
      ${parseInt(this._timeLeft / 60, 10).toString().padStart(2, '0')}:${parseInt(this._timeLeft % 60, 10).toString().padStart(2, '0')}
  `;
}