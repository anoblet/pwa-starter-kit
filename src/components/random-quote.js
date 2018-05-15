import { html, LitElement } from '@polymer/lit-element';

const quotes = [
  'Quote 1',
  'Quote 2',
  'Quote 3',
];

class RandomQuote extends LitElement {
  static get properties() {
      return {
          quote: String
      }
  }

  getRandom(items) {
    return items[Math.floor(Math.random()*items.length)];
  }

  _render(props) {
    return html`
      <style> :host { display: block } </style>
      ${this.getRandom(quotes)}
    `;
  }
}

window.customElements.define('random-quote', RandomQuote);
