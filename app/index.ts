import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron';

import { join, resolve } from 'path';

import './ipcs/general';
import './ipcs/store';
import './ipcs/updater';
import { resolvers, deepLinkResolver } from './utils/deepLink';

declare global {
  var win: BrowserWindow | null;
}

const IS_MAC = process.platform === 'darwin';
const DEV_URL = `http://localhost:3000/#/search/items`;
const PROD_FILE_PATH = join(__dirname, '../index.html');
const RESOURCES_PATH = app.isPackaged
  ? join(process.resourcesPath, 'resources')
  : join(app.getAppPath(), 'resources');

const icon = nativeImage.createFromPath(
  `${RESOURCES_PATH}/icons/${IS_MAC ? 'logo@512.png' : 'logo@256.ico'}`,
);

const trayIcon = icon.resize({ width: 20, height: 20 });

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
  process.exit(0);
}

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('laas', process.execPath, [resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('laas');
}

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
    icon,
    webPreferences: {
      preload: join(__dirname, 'preload/index.js'),
    },
  });

  if (app.isPackaged) {
    global.win.loadFile(PROD_FILE_PATH, {
      hash: '#/search/items',
    });
    global.win?.webContents.toggleDevTools(); // FIXME: Remove this line
  } else {
    global.win.loadURL(DEV_URL);
    global.win?.webContents.toggleDevTools(); // FIXME: Remove this line
  }

  global.win.on('ready-to-show', () => {
    global.win?.show();
  });
};

app.on('activate', () => {
  createWindow();
});

app.on('second-instance', (_, argv) => {
  if (!IS_MAC) {
    const url = argv.find(arg => arg.startsWith('laas://'));

    if (url) {
      deepLinkResolver(url, resolvers);
    }
  }

  createWindow();
});

app.on('window-all-closed', () => {
  global.win = null;
});

app.on('open-url', (_, url) => {
  deepLinkResolver(url, resolvers);
});

app.whenReady().then(() => {
  createWindow();

  let tray = new Tray(trayIcon);

  const contextMenu = Menu.buildFromTemplate([
    { label: '앱 화면 보기', type: 'normal', click: () => createWindow() },
    {
      label: '대기시간 무시하고 바로 검색 시작하기',
      type: 'normal',
      click: () => {},
    },
    { type: 'separator' },
    { label: '앱 끄기', role: 'quit', type: 'normal' },
  ]);

  tray.setToolTip('LAAS');
  tray.setContextMenu(contextMenu);
});
