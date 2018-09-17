import { html } from '@polymer/lit-element';

const style = html`
  :host > div {
    width: max-content;
    margin: 0 auto;
    /** Flex
    display: flex;
    justify-content: center;
    */
  }
`

export default function (props) {
  return html`
    <style>
      ${style}
    </style>
    <div id="time">${this.view('Input', props)}</div>
    <div>${this.view('Buttons')}</div>
  `;
}