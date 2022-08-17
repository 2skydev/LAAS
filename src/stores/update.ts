import { UpdateStoreValues } from '@app/stores/update';
import { atom } from 'recoil';

export const updateStore = atom<UpdateStoreValues>({
  key: 'update',
  default: (async () => {
    return {
      version: await window.electron.getVersion(),
      status: await window.electron.getUpdaterStatus(),
    };
  })(),
});
