import { BaseElement } from '../BaseElement';

class ComponentHeader extends BaseElement {
  static get properties() {
    return {
    }
  }
}

window.customElements.define('component-header', ComponentHeader);