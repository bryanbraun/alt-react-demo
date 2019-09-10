import { Component } from './component.js';

export class LengthSlider extends Component {
  constructor(props) {
    super({
      props,
      element: document.getElementById('length-slider'),
    });

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(event) {
    var newRangeNumber = parseInt(event.target.value);
    this.element.form.characterCount.value = newRangeNumber;
    this.props.updateLength(newRangeNumber);
  }

  render() {
    this.element.innerHTML = `
      <div>
        Password Length: <output id="characterCount">${this.props.passwordLength}</output>
      </div>
      <input type="range" min="8" max="20" value="${this.props.passwordLength}" />
    `;

    this.element.querySelector('input').addEventListener('input', this.handleSliderChange);
  }
}
