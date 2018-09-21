import { html } from '/node_modules/@polymer/lit-element/lit-element.js';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';

export default function (props) {
  const properties = this.constructor.properties;
  const keys = Object.keys(properties);
  return html`
    ${repeat(keys, (prop) =>
      html`
        ${typeof(properties[prop]()) == 'number'? html`
          ${prop} = ${this[prop]}
          <input type="number" on-change="${(e) => this[prop] = e.target.value}"/>
        ` : ''}
        ${typeof(properties[prop]()) == 'boolean'? html`
          ${prop} = ${this[prop]}
          <input type="checkbox" checked="${this[prop]}" on-click="${() => this[prop] = !this[prop]}"/>
        ` : ''}
      `
    )}
  `
}