import { html } from '@polymer/lit-element';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';
import { Checkbox } from '@material/mwc-checkbox'

export default function (props) {
  const properties = this.scope.constructor.properties;
  const keys = Object.keys(properties);
  const updateProp = (prop, value) => {
    this.scope[prop] = value;
    this.scope = false;
  }
  return html`
    ${repeat(keys, (prop) => {
      const type = typeof(properties[prop]());
      return html`
        ${typeof(properties[prop]()) == 'boolean'? html`
          ${prop} = ${this.scope[prop]}
          <mwc-checkbox checked="${this.scope[prop]}" on-click="${() => updateProp(prop, !this.scope[prop])}"></mwc-checkbox>
        ` : ''}
        ${typeof(properties[prop]()) == 'number'? html`
          ${prop} = ${this.scope[prop]}
          <input type="number" on-change="${(e) => this.scope[prop] = e.target.value}"/>
        ` : ''}
        ${typeof(properties[prop]()) == 'string'? html`
          ${prop} = ${this.scope[prop]}
          <input type="text" on-change="${(e) => this.scope[prop] = e.target.value}"/>
        ` : ''}
      `
    })}
  `
}