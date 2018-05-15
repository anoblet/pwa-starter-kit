import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class EyeSight extends LitElement {
  _getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  _getRandomString() {
    let newArray = [];

    for (let i = 0; i < 26; i++) {
      newArray.push(this._getRandom(characters));
    }
    return newArray.join('');
  }

  _getChart(numberOfLines = 10) {
    let chart = [];
    for (let i = 1; i < numberOfLines; i++) {
      chart.push(this._getLine(i))
    }
    console.log(chart);
    return chart;
  }

  _getLine(numberOfChars) {
    let line = []
    for (let i = 0; i < numberOfChars; i++) {
      line.push(this._getRandom(characters).toUpperCase());
    }
    return line;
    return line.join('');
  }

  _render(props) {
    let chart = this._getChart();
    return html`
      <style>
        :host {
          display: block
        }
      
        li {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
          list-style-type: none;
          text-align: center;
        }

        li > span {
        }
      </style>
      ${this._getRandomString()}
      <ul>
        ${repeat(chart, (i) => i.id, (i, index) => html`
        ${100/i.length}
        <li style$="font-size: ${100/i.length}vw">
          ${repeat(i, (i2) => i2.id, (i2, index) => html`
          <span>${i2}</span>
          `)}
        </li>
        `)}
      </ul>
    `;
  }
}

window.customElements.define('eye-sight', EyeSight);
