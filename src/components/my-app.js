
import { BaseElement } from './BaseElement.js';

class MyApp extends BaseElement {
  static get properties() {
  }
}

window.customElements.define('my-app', MyApp);
