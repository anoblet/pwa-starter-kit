import { html, LitElement } from '@polymer/lit-element';

class QuoteOfTheDay extends LitElement {
  static get properties() {
      return {
          quote: String
      }
  }

  ready() {
      super.ready();
      // this.getQuote();
  }

  getQuote() {
    return fetch('http://quotes.rest/qod.json?category=inspire ')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Error');          
        }
        return response.json();
      }).then((json) => {
        return json.contents.quotes[0].quote;
      }).catch((error) => {
        return 'There was an error with the request';
    });
  }

  _render(props) {
    return html`
      <style> :host { display: block } </style>
      ${this.getQuote()}
    `;
  }
}

window.customElements.define('quote-of-the-day', QuoteOfTheDay);
