import { html } from '/node_modules/@polymer/lit-element/lit-element.js';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';
import { BaseElement } from '../BaseElement.js';
export class Countdown extends BaseElement {
  static get properties() {
    return {
      'scope': Object
    }
  }
  render(props) {
    const keys = Object.keys(this.constructor.properties);
    return html`
      ${repeat(keys, function ()  {
        const type = typeof(properties[prop]());
        return html`
          ${typeof(properties[prop]()) == 'boolean'? html`
            ${prop} = ${this[prop]}
            <input type="checkbox" checked="${this[prop]}" on-click="${() => this[prop] = !this[prop]}"/>
          ` : ''}
          ${typeof(properties[prop]()) == 'number'? html`
            ${prop} = ${this[prop]}
            <input type="number" on-change="${(e) => this[prop] = e.target.value}"/>
          ` : ''}
          ${typeof(properties[prop]()) == 'string'? html`
            ${prop} = ${this[prop]}
            <input type="text" on-change="${(e) => this[prop] = e.target.value}"/>
          ` : ''}
        `
      })}
    `
  }
}

window.customElements.define('my-countdown', Countdown);
