import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';

import FileSystemRoutes from '~/components/FileSystemRoutes';

import { ElectronRendererContext } from '../app/preload';

declare global {
  interface Window {
    electron: ElectronRendererContext;
  }
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <FileSystemRoutes />
    </RecoilRoot>
  </BrowserRouter>,
);
