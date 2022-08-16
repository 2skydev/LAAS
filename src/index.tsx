import { createRoot } from 'react-dom/client';

import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';

import Routes from '~/components/Routes';

import { ElectronRendererContext } from '../app/preload';

declare global {
  interface Window {
    electron: ElectronRendererContext;
  }
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Routes />
  </RecoilRoot>,
);
