import { store } from '../password-store.js';

// This base component lets us inherit the following functionality:
//
// 1. Assigning props for re-use outside the parent component's constructor
// 2. An element to attach to when rendering
// 3. Automatic re-rendering, triggered by a user-defined renderTrigger
export class Component {
  constructor(params = {}) {

    // Allow us to access props outside the constructor.
    this.props = params.props;

    // Store the HTML element for the component, so we can reference it with `this.element`.
    if (params.hasOwnProperty('element')) {
      this.element = params.element;
    }

    // Set a default render function, just in case the inheriting component doesn't set one.
    this.render = this.render || function () { };

    // If a renderTrigger event names is passed, subscribe re-renders to that event.
    if (params.renderTrigger) {
      store.subscribe(params.renderTrigger, () => this.render());
    }
  }
}
