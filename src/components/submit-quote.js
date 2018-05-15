import { html, LitElement } from '@polymer/lit-element';
import { Button } from '@material/mwc-button';

class SubmitQuote extends LitElement {
  static get properties() {
      return {
          quote: String
      }
  }

  _render(props) {
    return html`
      <style>
        :host { 
          display: block;
        }
        
        input {
          border-top-width: 0;
          border-right-width: 0;
          border-left-width: 0;
        }
        
        input:focus {
          outline: 0;
        }
      </style>
      <form>
        <input type="text" placeholder="Quote" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Date" />
        <mwc-button label="Submit" raised></mwc-button>
      </form>
    `;
  }
}

window.customElements.define('submit-quote', SubmitQuote);
