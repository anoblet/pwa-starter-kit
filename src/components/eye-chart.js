import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class EyeChart extends LitElement {
  constructor() {
    super();
    this.scale = 100;
    this.line = false;
  }

  static get properties() {
    return {
      scale: Number,
      line: Number
    }
  }

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



  _getLine(numberOfChars) {
    let line = []
    for (let i = 0; i < numberOfChars; i++) {
      line.push(this._getRandom(characters).toUpperCase());
    }
    return line;
  }

  _getChart(firstLine = 1, lastLine = 10) {
    let chart = [];
    for (let i = firstLine; i <= lastLine; i++) {
      chart.push(this._getLine(i))
    }
    return chart;
  }

  _render({ scale }) {
    let chart;
    if (this.line) chart = this._getChart(this.line, this.line);
    else {
      chart = this._getChart();
    }
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
      
        li>span {}
      </style>
      <ul>
        ${repeat(chart, (i) => i.id, (i, index) => html`
        <li style$="font-size: ${this.scale / i.length}vw">
          ${repeat(i, (i2) => i2.id, (i2, index) => html`
          <span>${i2}</span>
          `)}
        </li>
        `)}
      </ul>
    `;
  }
}

window.customElements.define('eye-chart', EyeChart);
