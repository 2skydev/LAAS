import { createRoot } from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import Routes from '~/components/Routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Routes />
  </RecoilRoot>,
);
