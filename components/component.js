// This base component lets us inherit the following functionality:
//
// 1. Assigning props for re-use outside the parent component's constructor.
// 2. Creating state and a setState function for changing it.
// 3. An element that we can reference via this.element (usually inside render()).
// 4. A "pass" function for doing subsequent renders where we can pass props.
export class Component {
  constructor(params = {}) {
    this.props = params.props;
    this.element = params.element;
    this.render = this.render || function () { };
    this.state = {};

    this.setState = (newStateObj) => {
      this.state = Object.assign({}, this.state, newStateObj);
      this.render();
    };
    this.pass = (props) => {
      this.props = props;
      return this;
    };
  }
}
