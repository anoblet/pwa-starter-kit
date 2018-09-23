
import { html } from '@polymer/lit-element';
import { BaseElement } from './BaseElement.js';

class MyApp extends BaseElement {
  static get properties() {
  }
}

window.customElements.define('my-app', MyApp);
