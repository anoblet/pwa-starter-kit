export const CreateComponent = function (superClass) {
  return class extends superClass {
    /**
    * Create the component
    */

    constructor(props) {
      super(props);
    }

    connectedCallback() {
      super.connectedCallback();
      // this._createComponent();
    }

    _createComponent() {
      const tag = this.constructor.name.split(/(?=[A-Z])/).map((part) => {
        return part.toLowerCase();
      }).join('-');
      console.log(tag);
      console.log(this.constructor);
      window.customElements.define(tag, this.constructor);
    }
  }
}
