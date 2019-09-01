import { Component } from './component.js';
import { passwordStore } from '../password-store.js';

export class CharacterCount extends Component {
  constructor(props) {
    super({
      renderTrigger: 'passwordLength',
      element: document.getElementById(props.id),
    });
  }

  render() {
    this.element.innerHTML = `${passwordStore.state.passwordLength}`;
  }
}
