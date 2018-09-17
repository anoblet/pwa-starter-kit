import { PageElement } from '../PageElement.js';

import '../Countdown/Countdown.js';
import '@anoblet/time-field'

class PageHome extends PageElement {
  constructor() {
    super();
    this.pageTitle = 'Home';
    this.pageContent = 'This is my content.';
  }
}

window.customElements.define('page-home', PageHome);
