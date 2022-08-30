import { UpdateStoreValues } from '@app/electron/stores/update';

import { atom } from 'recoil';

export const updateStore = atom<UpdateStoreValues & { version: string }>({
  key: 'update',
  default: (async () => {
    return {
      version: await window.electron.getVersion(),
      status: await window.electron.getUpdaterStatus(),
    };
  })(),
});
