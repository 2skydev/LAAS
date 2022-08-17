import Store from 'electron-store';

import { UpdateStatus } from '@app/utils/updater';

export interface UpdateStoreValues {
  status: UpdateStatus;
}

export const updateStore = new Store<UpdateStoreValues>({
  name: 'update',
  accessPropertiesByDotNotation: false,
  defaults: {
    status: {
      event: 'checking-for-update',
      data: null,
      time: new Date().getTime(),
    },
  },
});
