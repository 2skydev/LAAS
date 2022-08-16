import { app, BrowserWindow } from 'electron';

import { join } from 'path';
import { match } from 'path-to-regexp';

import deepLinkResolvers from './deepLinkResolvers';
import './ipcs/general';
import './ipcs/store';

declare global {
  var win: BrowserWindow | null;
}

const DEV_URL = `http://localhost:3000`;
const PROD_FILE_PATH = join(__dirname, '../index.html');

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
  process.exit(0);
}

app.setAsDefaultProtocolClient('laas');

const createWindow = () => {
  if (global.win) {
    if (global.win.isMinimized()) global.win.restore();
    global.win.focus();
    return;
  }

  global.win = new BrowserWindow({
    width: 1800,
    height: 1000,
    backgroundColor: '#36393F',
    darkTheme: true,
    show: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      preload: join(__dirname, 'preload/index.js'),
    },
  });

  if (app.isPackaged) {
    global.win.loadFile(PROD_FILE_PATH);
  } else {
    global.win.loadURL(DEV_URL);
    global.win?.webContents.toggleDevTools();
  }

  global.win.on('ready-to-show', () => {
    global.win?.show();
  });
};

app.on('activate', () => {
  createWindow();
});

app.on('second-instance', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  global.win = null;
});

app.on('open-url', (_, url) => {
  const pathname = url.replace('laas://', '/');

  for (const path in deepLinkResolvers) {
    const data = match(path)(pathname);

    if (data) {
      deepLinkResolvers[path](data);
      break;
    }
  }
});

app.whenReady().then(() => {
  createWindow();
});
