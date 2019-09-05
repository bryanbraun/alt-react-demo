import { Component } from './component.js';
import { store } from '../password-store.js';

export class Checkbox extends Component {
  constructor(props) {
    super({
      props,
      renderTrigger: props.id,
      element: document.getElementById(props.id),
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    store.setState(this.props.stateKey, event.target.checked);
  }

  render() {
    const checkedAttr = store.state[this.props.stateKey] ? 'checked' : '';

    this.element.innerHTML = `
      <span>${this.props.name}</span>
      <input
        type="checkbox"
        ${checkedAttr}
      />
    `;

    this.element.querySelector('input').addEventListener('change', this.handleChange);
  }
}
