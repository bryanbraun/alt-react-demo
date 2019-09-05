import { Store } from './lib/store.js';

const initialState = {
  passwordLength: 10,
  characterOptions: {
    hasNumbers: false,
    hasSymbols: false,
  }
};

export const store = new Store(initialState);
