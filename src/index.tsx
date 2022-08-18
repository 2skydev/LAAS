import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ElectronRendererContext } from '@app/preload';
import 'antd/dist/antd.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RecoilRoot } from 'recoil';
import { SWRConfig, SWRConfiguration } from 'swr';

import FileSystemRoutes from '~/components/FileSystemRoutes';

dayjs.extend(relativeTime);
dayjs.locale('ko');

declare global {
  interface Window {
    electron: ElectronRendererContext;
  }
}

const swrConfig: SWRConfiguration = {
  errorRetryCount: 3,
  errorRetryInterval: 500,
  revalidateOnFocus: false,
  revalidateIfStale: false,
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <RecoilRoot>
      <SWRConfig value={swrConfig}>
        <Suspense>
          <FileSystemRoutes />
        </Suspense>
      </SWRConfig>
    </RecoilRoot>
  </HashRouter>,
);
