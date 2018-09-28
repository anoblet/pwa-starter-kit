import { html } from '@polymer/lit-element';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';
import '@material/mwc-checkbox'
// import '@material/mwc-textfield'

export const PropertyEditor = function (props) {
  const properties = this.constructor.properties;
  return html`
    ${repeat(Object.keys(properties), (prop) => {
      // Don't display protected or private properties
      if(prop.startsWith('_')) return;
      // const type = typeof(properties[prop]());
      return html`
        ${typeof(properties[prop]()) == 'boolean'? html`
          <label>${prop}:</label>
          <mwc-checkbox checked="${this[prop]}" on-click="${() => this[prop] = !this[prop]}"></mwc-checkbox>
        ` : ''}
        ${typeof(properties[prop]()) == 'number'? html`
          ${prop}
          <input type="number" value="${this[prop]}" on-input="${(e) => this[prop] = e.target.value}"/>
          <mwc-textfield type="number" value="${this[prop]}" on-input="${(e) => this[prop] = e.target.value}"></mwc-textfield>
        ` : ''}
        ${typeof(properties[prop]()) == 'string'? html`
          ${prop}
          <input type="text" on-change="${(e) => this[prop] = e.target.value}"/>
          <mwc-textfield value="${this[prop]}" on-input="${(e) => this[prop] = e.target.value}"></mwc-textfield>
        ` : ''}
      `
    })}
  `
}