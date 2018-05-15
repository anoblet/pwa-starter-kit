/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';

import './quote-of-the-day.js';
import './random-quote.js';
import './submit-quote.js';
import './eye-chart.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      Quote of the day:
      <quote-of-the-day></quote-of-the-day>
      
      Random quote:
      <random-quote></random-quote>
      
      Submit quote:
      <submit-quote></submit-quote>
    
      Eye chart:
      <eye-chart scale="10"></eye-chart>
      <eye-chart line="2" scale="25"></eye-chart>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
