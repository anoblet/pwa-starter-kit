import { LitElement, html } from '@polymer/lit-element';
import { CreateComponent } from '../mixins/CreateComponent';
import { DefaultValue } from '../mixins/DefaultValue';

/**
 * Template will be block level structure
 * Style will be strictly asthetic
 */

export class BaseElement extends DefaultValue(LitElement) {
  constructor(props) {
    super(props);
    this._name = this.constructor.name;
    this._template = [];
    this._setDefaultValues();
  }

  static get properties() {
    return {
      _name: {
        type: String
      },
      _baseDir: {
        type: String,
        value: false
      },
      _style: {
        type: String,
        value: false
      },
      _template: {
        type: Function,
        value: false
      },
    }
  }

  _render(props) {
    return this.view(this._name, props);
  }

  View(View, props) {
    if (!this._template[View]) {
      import(`/src/components/${View}/View/${View}.js`).then((module) => {
        this._template[View] = module.default.bind(this);
        this.requestRender();
      });
    }
    else {
      return this._template[View](props);
    }
  }

  view(view, props) {
    return this.View(view, props);
  }
}