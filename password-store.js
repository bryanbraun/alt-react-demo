import { Store } from './lib/store.js';

const initialState = {
  passwordLength: 10,
  hasNumbers: false,
  hasSymbols: false,
};

export const passwordStore = new Store(initialState);
