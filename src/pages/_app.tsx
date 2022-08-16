import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Layout from '~/components/Layout';
import Titlebar from '~/components/Titlebar';
import { configStore } from '~/stores/config';
import { InitGlobalStyled } from '~/styles/init';
import { darkTheme, lightTheme, sizes } from '~/styles/themes';

type Sizes = typeof sizes;
type Colors = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: Sizes;
    colors: Colors;
  }
}

const App = ({ children }: { children: ReactNode }) => {
  const { theme } = useRecoilValue(configStore);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/search/items');
  }, []);

  return (
    <ThemeProvider
      theme={{
        sizes: sizes,
        colors: theme === 'light' ? lightTheme : darkTheme,
      }}
    >
      <InitGlobalStyled />

      <div id="app">
        <Titlebar />
        <Layout>{children}</Layout>
      </div>
    </ThemeProvider>
  );
};

export default App;
