import { Component } from './component.js';
import { CharacterCount } from './character-count.js';
import { store } from '../password-store.js';

export class LengthSlider extends Component {
  constructor() {
    super({
      element: document.getElementById('length-slider'),
    });
  }

  updateLength(event) {
    store.setState('passwordLength', parseInt(event.target.value));
  }

  render() {
    this.element.innerHTML = `
      <div>
        Password Length: <output id="character-count"></output>
      </div>
      <input type="range" min="8" max="20" value="${store.state.passwordLength}" />
    `;

    this.element.querySelector('input').addEventListener('input', this.updateLength);

    new CharacterCount({ id: 'character-count' }).render();
  }
}
