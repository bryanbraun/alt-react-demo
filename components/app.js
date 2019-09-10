import { Component } from './component.js';
import { Password } from './password.js';
import { LengthSlider } from './length-slider.js';
import { Checkbox } from './checkbox.js';

export class App extends Component {
  constructor() {
    super({
      element: document.getElementById('app')
    });

    this.state = {
      passwordLength: 10,
      hasNumbers: false,
      hasSymbols: false,
    };

    this.updateLength = this.updateLength.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.numbersStaticProps = {
      name: 'Numbers',
      id: 'numbers',
      handleCheck: this.handleCheck
    };
    this.symbolsStaticProps = {
      name: 'Symbols',
      id: 'symbols',
      handleCheck: this.handleCheck
    };

    this.passwordEl = new Password({ ...this.state });
    this.numbersCheckboxEl = new Checkbox({ isChecked: this.state.hasNumbers, ...this.numbersStaticProps });
    this.symbolsCheckboxEl = new Checkbox({ isChecked: this.state.hasSymbols, ...this.symbolsStaticProps });
    this.lengthSliderEl = new LengthSlider({ passwordLength: this.state.passwordLength, updateLength: this.updateLength }).render();
  }

  updateLength(newPasswordLength) {
    this.setState({
      'passwordLength': newPasswordLength
    });
  }

  handleCheck(event) {
    const idsToStateKeys = {
      numbers: 'hasNumbers',
      symbols: 'hasSymbols'
    };

    this.setState({
      [idsToStateKeys[event.target.parentElement.id]]: event.target.checked
    });
  }

  render() {
    this.passwordEl.pass({ ...this.state }).render();
    this.numbersCheckboxEl.pass({ isChecked: this.state.hasNumbers, ...this.numbersStaticProps }).render();
    this.symbolsCheckboxEl.pass({ isChecked: this.state.hasSymbols, ...this.symbolsStaticProps }).render();
  }
}
