import { Component } from './component.js';

export class DarkMode extends Component {
  constructor() {
    super({ element: document.getElementById('dark-mode') });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isDark: !this.state.isDark })
  }

  render() {
    const isDark = this.state.isDark;

    document.body
      .setAttribute('data-theme', isDark ? 'dark' : 'light');

    this.element.innerHTML = `
      <label>
        <span>Dark Mode</span>
        <input type="checkbox" ${isDark ? 'checked' : ''} />
      </label>
    `;

    this.element.querySelector('input')
      .addEventListener('change', this.handleChange);
  }
}
