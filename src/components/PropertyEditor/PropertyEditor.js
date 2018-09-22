import { html } from '/node_modules/@polymer/lit-element/lit-element.js';
import { repeat } from '/node_modules/lit-html/lib/repeat.js';
import { BaseElement } from '../BaseElement.js';

const testValues = {
  'Test boolean': Boolean,
  'Test string': String,
  'Test number': Number,
  // 'Test object' Object,
  'Test array': Array
}

export default class PropertyEditor extends BaseElement {
  static get properties() {
    return {
      'scope': Object,
      // 'demo': Boolean
    }
  }

  getProperties() {
    return Array.from(this.scope.constructor.properties);
  }


}

window.customElements.define('property-editor', PropertyEditor);
