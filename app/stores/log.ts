import Store from 'electron-store';

export const logStore = new Store({
  name: 'log',
  accessPropertiesByDotNotation: false,
  defaults: {
    notification: [],
  },
});
