import { Component } from './component.js';

export class Checkbox extends Component {
  constructor(props) {
    super({
      props,
      element: document.getElementById(props.id),
    });
  }

  render() {
    const checkedAttr = this.props.isChecked ? 'checked' : '';

    this.element.innerHTML = `
      <span>${this.props.name}</span>
      <input
        type="checkbox"
        ${checkedAttr}
      />
    `;

    this.element.querySelector('input').addEventListener('change', this.props.handleCheck);
  }
}
