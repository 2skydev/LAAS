import { dialog } from 'electron';

import axios from 'axios';
import { MatchResult } from 'path-to-regexp';

export type DeepLinkResolvers = Record<string, (data: MatchResult<any>) => void>;

const deepLinkResolvers: DeepLinkResolvers = {
  '/oauth/discord/:token': async ({ params }) => {
    const { token } = params;

    try {
      const res = await axios('https://discord.com/api/v10/users/@me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { id, username, avatar } = res.data;

      global.win?.webContents.send('oauth/discord', {
        id,
        username,
        avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.webp`,
      });
    } catch (error: any) {
      let message = error?.response?.data || error?.message;

      if (typeof message === 'object') {
        message = JSON.stringify(message);
      }

      dialog.showErrorBox(
        '디스코드 연동 오류',
        `디스코드 연동 작업중 오류가 발생했습니다.\n${message}`,
      );
    }
  },
};

export default deepLinkResolvers;
