import { html } from '@polymer/lit-element';
import {Button} from "@material/mwc-button"

export default function () {
  return html`
    <mwc-button raised on-click="${() => this.start()}">Start</mwc-button>
    <mwc-button raised on-click="${() => this.stop()}">Stop</mwc-button>
    <mwc-button raised on-click="${() => this.reset()}">Reset</mwc-button>
  `;
}
