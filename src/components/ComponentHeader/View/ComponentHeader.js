import { html } from '@polymer/lit-element';

const style = html`
  :host {
    background: blue;
  }
`

export default function (props) {
  return html`
    <style>
      ${style}
    </style>
    Header
  `
}