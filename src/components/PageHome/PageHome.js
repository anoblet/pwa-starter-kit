import { PageElement } from '../PageElement.js';

import { connect } from '../../../node_modules/pwa-helpers/connect-mixin.js';
import { store } from '../../store.js';
import { setDuration, setTimeleft } from '../../actions/page-home.js';

import '../Countdown/Countdown.js';
import '../../../node_modules/@anoblet/time-field/time-field.js'

class PageHome extends connect(store)(PageElement) {
  constructor() {
    super();
    this.pageTitle = 'Home';
    this.pageContent = 'This is my content.';

    // this.duration = 300;
  }

  static get properties() {
    return {
      duration: Number,
      timeleft: Number
    }
  }

  /**
   *  Observer/Store dispatcher(s)
   *  Syntax: 
   *    Listener: *property*-changed
   *    Action: set*Property*
  */

  _firstRendered() {
    this.addEventListener('duration-changed', function(e) {
      store.dispatch(setDuration(e.detail.duration));
    });
    this.addEventListener('timeleft-changed', function(e) {
      store.dispatch(setTimeleft(e.detail.timeleft));
    });
  }

  // Syncronize with the store

  _stateChanged(state) {
    this.duration = state.timer.duration;
    this.timeleft = state.timer.timeleft;
  }
}

window.customElements.define('page-home', PageHome);
