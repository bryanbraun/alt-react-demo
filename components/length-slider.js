import { Component } from './component.js';
import { passwordStore } from '../password-store.js';

export class LengthSlider extends Component {
  constructor() {
    super({
      element: document.getElementById('length-slider'),
    });
  }

  updateLength(event) {
    passwordStore.setState('passwordLength', parseInt(event.target.value));
  }

  render() {
    this.element.innerHTML = `
      <div>Password Length</div>
      <input type="range" min="8" max="20" value="${passwordStore.state.passwordLength}" />
    `;

    this.element.querySelector('input').addEventListener('input', this.updateLength);
  }
}
