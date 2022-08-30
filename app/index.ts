import { BrowserWindow } from 'electron';

import LAAS from './laas';

declare global {
  var win: BrowserWindow | null;
}

const lass = new LAAS();

lass.bootstrap();
