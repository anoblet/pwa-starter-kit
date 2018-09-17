import { BaseElement } from './BaseElement';

export class PageElement extends BaseElement {
  static get properties() {
    return {
      pageTitle: {
        type: String,
        value: false
      },
      pageContent: {
        type: String,
        value: false
      },
    }
  }
}