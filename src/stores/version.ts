import { atom } from 'recoil';

export interface VersionStoreValues {
  version: string;
}

export const versionStore = atom<VersionStoreValues>({
  key: 'search',
  default: (async () => {
    return {
      version: await window.electron.getVersion(),
    };
  })(),
});
