import './password-store.js';

import { Password } from './components/password.js';
import { LengthSlider } from './components/length-slider.js';
import { Toggle } from './components/toggle.js';

new Password().render();
new LengthSlider().render();

new Toggle({ name: 'Has Numbers?', id: 'hasNumbers' }).render();
new Toggle({ name: 'Has Symbols?', id: 'hasSymbols' }).render();
