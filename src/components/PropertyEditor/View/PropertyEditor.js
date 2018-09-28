import { html } from '@polymer/lit-element';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';
import '@material/mwc-checkbox'
// import '@material/mwc-textfield'

export default function (props) {
  const properties = this.scope.constructor.properties;
  const keys = Object.keys(properties);
  const updateProp = (prop, value) => {
    // Parent component gets updated correctly
    if(this.scope[prop] != value) {
      this.scope[prop] = value;
      this.scope = false;
    }
    // Successfully updates the property-editor component with scope's new values while using input, mwc-checkbox with on-change
    // Overwrites scope when using mwc-textfield with on-input and fails
  }
  return html`
    ${repeat(keys, (prop) => {
      if(prop.startsWith('_')) return;
      const type = typeof(properties[prop]());
      return html`
        ${typeof(properties[prop]()) == 'boolean'? html`
          <label>${prop}: ${this.scope[prop]}</label>
          <mwc-checkbox checked="${this.scope[prop]}" on-click="${() => updateProp(prop, !this.scope[prop])}"></mwc-checkbox>
        ` : ''}
        ${typeof(properties[prop]()) == 'number'? html`
          ${prop} = ${this.scope[prop]}
          <input type="number" value="${this.scope[prop]}" on-input="${(e) => updateProp(prop, e.target.value)}"/>
          <mwc-textfield type="number" value="${this.scope[prop]}" on-input="${(e) => updateProp(prop, e.target.value)}"></mwc-textfield>
        ` : ''}
        ${typeof(properties[prop]()) == 'string'? html`
          ${prop} = ${this.scope[prop]}
          <input type="text" on-change="${(e) => updateProp(prop, e.target.value)}"/>
          <mwc-textfield value="${this.scope[prop]}" on-input="${(e) => updateProp(prop, e.target.value)}"></mwc-textfield>
        ` : ''}
      `
    })}
  `
}