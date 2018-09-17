export const DefaultValue = function (superClass) {
  return class extends superClass {
    /**
    * Define default property values
    */

    _setDefaultValues() {
      const properties = this.constructor.properties;
      for (const property in properties) {
        this[property] = properties[property].value;
      }
    }
  }
}
