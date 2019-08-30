import { Component } from './component.js';
import { passwordStore } from '../password-store.js';

export class Toggle extends Component {
  constructor(props) {
    super({
      props,
      renderTrigger: props.id,
      element: document.getElementById(props.id),
    })

    this.updateToggleValue = this.updateToggleValue.bind(this);
  }

  updateToggleValue(event) {
    passwordStore.setState(this.props.id, event.target.checked);
  }

  render() {
    const checkedAttr = passwordStore.state[this.props.id] ? 'checked' : '';

    this.element.innerHTML = `
      <span>${this.props.name}</span>
      <input type="checkbox" class="checkbox" ${checkedAttr} />
    `;

    this.element.querySelector('input').addEventListener('change', this.updateToggleValue);
  }
}
