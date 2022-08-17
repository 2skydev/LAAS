import { app } from 'electron';
import Store from 'electron-store';

import { UpdateStatus } from '@app/utils/updater';

export interface UpdateStoreValues {
  version: string;
  status: UpdateStatus;
}

export const updateStore = new Store<UpdateStoreValues>({
  name: 'update',
  accessPropertiesByDotNotation: false,
  defaults: {
    version: app.getVersion(),
    status: {
      event: 'checking-for-update',
      data: null,
      time: new Date().getTime(),
    },
  },
});
