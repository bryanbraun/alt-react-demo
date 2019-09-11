import { Component } from './component.js';

export class DarkMode extends Component {
  constructor() {
    super({
      element: document.getElementById('dark-mode'),
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isDark: !this.state.isDark })
  }

  render() {
    this.element.innerHTML = `
      <label>
        <span>Dark Mode</span>
        <input type="checkbox" ${this.state.isDark ? 'checked' : ''} />
      </label>
    `;

    this.element.querySelector('input').addEventListener('change', this.handleChange);

    document.body.setAttribute('data-theme', this.state.isDark ? 'dark' : 'light');
  }
}
