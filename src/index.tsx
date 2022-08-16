import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ElectronRendererContext } from '@app/preload';
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';

import FileSystemRoutes from '~/components/FileSystemRoutes';

declare global {
  interface Window {
    electron: ElectronRendererContext;
  }
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <FileSystemRoutes />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>,
);
