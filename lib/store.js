export class Store {
  constructor(initialState) {
    this.events = {};
    this.state = initialState || {};
  }

  /**
   * set works like a simplified version of lodash's _.set(),
   * only it sets this.state instead of an arbitrary object.
   *
   * Usage example:   set('city.street[0].color', 'brown');
   */
  set(propertyString, value) {
    // This Regex was borrowed from https://github.com/lodash/lodash/blob/4.17.15-es/_stringToPath.js
    const propertyNameMatcher = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    const propertyArray = [];

    // Split our propertyString into an array of values
    propertyString.replace(propertyNameMatcher, (match, number) => {
      propertyArray.push(number || match);
    });

    // Use the propertyArray to traverse our state object and set the value.
    propertyArray.reduce((accumulator, currentVal, index, array) => {
      if (index + 1 === array.length) {
        accumulator[currentVal] = value; // Set our property!
        return true;
      }

      return accumulator && accumulator[currentVal] ? accumulator[currentVal] : null;
    }, this.state);

    this.publish('state', this.state);   // Announce that 'state' was updated.
    this.publish(propertyString, value); // Announce the specific property that was updated.
  }

  publish(event, data = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }
    return this.events[event].map(callback => callback(data));
  }

  subscribe(event, callback) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
    return this.events[event].push(callback);
  }
}
