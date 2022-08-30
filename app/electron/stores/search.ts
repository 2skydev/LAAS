import Store from 'electron-store';

export const itemStore = new Store({
  name: 'item',
  accessPropertiesByDotNotation: false,
  defaults: {
    notification: [],
  },
});
