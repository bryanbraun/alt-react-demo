import { Component } from './component.js';
import { passwordStore } from '../password-store.js';

export class Checkbox extends Component {
  constructor(props) {
    super({
      props,
      renderTrigger: props.id,
      element: document.getElementById(props.id),
    })

    this.updateCheckboxValue = this.updateCheckboxValue.bind(this);
  }

  updateCheckboxValue(event) {
    passwordStore.setState(this.props.stateKey, event.target.checked);
  }

  render() {
    const checkedAttr = passwordStore.state[this.props.stateKey] ? 'checked' : '';

    this.element.innerHTML = `
      <span>${this.props.name}</span>
      <input type="checkbox" class="checkbox" ${checkedAttr} />
    `;

    this.element.querySelector('input').addEventListener('change', this.updateCheckboxValue);
  }
}
