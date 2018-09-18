import { html } from '@polymer/lit-element';
import { Button } from "@material/mwc-button"
// import {Fab} from "@material/mwc-fab"

const version = 2;

const style = html`
   :host > time-field, :host > mwc-button { width: max-content; margin: .45rem auto; /** Flex display: flex; justify-content:
  center; */ } mwc-button { display: block; }
`

export default function (props) {
  switch (version) {
    case 2:
      return html`
        <style>
          ${style}
        </style>
        <time-field time="${this.timeleft}"></time-field>
        <mwc-button id="start_pause" label="${this.icons ? 'Start' : ''}" icon="play_arrow" raised on-click="${() => this.start()}"></mwc-button>
        <mwc-button id="start_pause" label="${this.icons ? 'Reset' : ''}" icon="refresh" raised on-click="${() => this.reset()}"></mwc-button>
      `
    default:
      return html`
        <style>
          ${style}
        </style>
        <div id="time">${this.view('Input', props)}</div>
        <div>${this.view('Buttons')}</div>
      `
  }
}