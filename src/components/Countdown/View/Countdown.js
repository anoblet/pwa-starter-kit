import { html } from '@polymer/lit-element';
import "@material/mwc-button";
import Config from './Config.js';
import '../../PropertyEditor/PropertyEditor.js';

const version = 3;

const style = html`
   :host > time-field, :host > mwc-button { width: max-content; margin: .45rem auto; /** Flex display: flex; justify-content:
  center; */ } mwc-button { display: block; }
`

export default function (props) {
  switch (version) {
    case 3:
    return html`
      <style>
        ${style}
      </style>
      <property-editor scope="${this}"></property-editor>
      <time-field time="${this.timeleft}"></time-field>
      <mwc-button id="start_pause" label="${this.getLabel()}" icon="${this.getIcon()}" raised on-click="${() => this.toggle()}"></mwc-button>
      <mwc-button id="reset" label="${this.icons ? 'Reset' : ''}" icon="refresh" raised on-click="${() => this.reset(this.duration)}"></mwc-button>
    `
    case 2:
      return html`
        <style>
          ${style}
        </style>
        <time-field time="${this.timeleft}"></time-field>
        <mwc-button id="start_pause" label="${this.icons ? 'Start' : ''}" icon="play_arrow" raised on-click="${() => this.start()}"></mwc-button>
        <mwc-button id="reset" label="${this.icons ? 'Reset' : ''}" icon="refresh" raised on-click="${() => this.reset(this.duration)}"></mwc-button>
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