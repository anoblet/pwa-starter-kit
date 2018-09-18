import { PageElement } from '../PageElement.js';

import { connect } from '../../../node_modules/pwa-helpers/connect-mixin.js';
import { store } from '../../store.js';
import { update, updateDuration, updateTimeleft } from '../../actions/page-home.js';

import '../Countdown/Countdown.js';
import '@anoblet/time-field/time-field.js'

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

  _firstRendered() {
    this.addEventListener('duration-changed', function(e) {
      store.dispatch(updateDuration(e.detail.time));
    });
    this.addEventListener('timeleft-changed', function(e) {
      store.dispatch(updateTimeleft(e.detail.timeleft));
    });
  }

  _stateChanged(state) {
    this.duration = state.timer.duration;
    this.timeleft = state.timer.timeleft;
  }
}

window.customElements.define('page-home', PageHome);
