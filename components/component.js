import { passwordStore } from '../password-store.js';

// This base component lets us inherit the following functionality:
//
// 1. Assigning props for re-use outside the parent component's constructor
// 2. An element to attach to when rendering
// 3. Automatic re-rendering, triggered by a user-defined renderTrigger
export class Component {
  constructor(params = {}) {

    // Allows us to access props outside the constructor.
    this.props = params.props;

    // Store the HTML element to attach the render to if set.
    if (params.hasOwnProperty('element')) {
      this.element = params.element;
    }

    // A default render function, just in case the inheriting component doesn't set one.
    this.render = this.render || function () { };

    // If one or more renderTrigger event names are passed, subscribe re-renders to those events.
    if (params.renderTrigger) {
      passwordStore.subscribe(params.renderTrigger, () => this.render());
    }
  }
}
