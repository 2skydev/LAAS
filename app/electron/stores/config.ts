import Store from 'electron-store';

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
}

export interface ConfigStoreValues {
  general: {
    theme: 'light' | 'dark';
    developerMode: boolean;
  };
  search: {
    lostarkID: string;
    lostarkPW: string;
    discordUser: DiscordUser | null;
    repeat: boolean;
    interval: number;
    saveLogs: boolean;
  };
}

export const configStore = new Store<ConfigStoreValues>({
  name: 'config',
  accessPropertiesByDotNotation: false,
  defaults: {
    general: {
      theme: 'dark',
      developerMode: false,
    },
    search: {
      lostarkID: '',
      lostarkPW: '',
      discordUser: null,
      repeat: false,
      interval: 1,
      saveLogs: false,
    },
  },
});
