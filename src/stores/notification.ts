import { atom } from 'recoil';

export interface NotificationStoreValues {
  status: {
    id: string;
    status: string;
    description: string;
  };
}

export const notificationStore = atom<NotificationStoreValues>({
  key: 'notification',
  default: {
    status: {
      id: 'loadConfig',
      status: 'warning',
      description: '설정을 불러오고 있어요 기다려주세요 :)',
    },
  },
});
