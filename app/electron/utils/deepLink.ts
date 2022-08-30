import { dialog } from 'electron';
import log from 'electron-log';

import axios from 'axios';
import { MatchResult, match } from 'path-to-regexp';

export type DeepLinkResolvers = Record<string, (data: MatchResult<any>) => void>;

export const runDeepLinkResolver = (url: string) => {
  const pathname = url.replace('laas://', '/');

  for (const path in resolvers) {
    const data = match(path)(pathname);

    if (data) {
      resolvers[path](data);
      break;
    }
  }
};

export const resolvers: DeepLinkResolvers = {
  '/oauth/discord/:token': async ({ params }) => {
    const { token } = params;

    try {
      const res = await axios('https://discord.com/api/v10/users/@me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let { id, username, avatar } = res.data;

      avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}.webp`;

      log.info('Discord OAuth success', { id, username, avatar });

      global.win?.webContents.send('oauth/discord', {
        id,
        username,
        avatar,
      });
    } catch (error: any) {
      let message = error?.response?.data || error?.message;

      if (typeof message === 'object') {
        message = JSON.stringify(message);
      }

      log.error('Discord OAuth faild', message);

      dialog.showErrorBox(
        '디스코드 연동 오류',
        `디스코드 연동 작업중 오류가 발생했습니다.\n${message}`,
      );
    }
  },
};
