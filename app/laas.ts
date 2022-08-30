import './electron/ipcs/developers';
import './electron/ipcs/general';
import './electron/ipcs/store';
import './electron/ipcs/updater';
import { runDeepLinkResolver } from './electron/utils/deepLink';
import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron';

import { join, resolve } from 'path';
import { BrowserContext, chromium } from 'playwright';

class LAAS {
  IS_MAC = process.platform === 'darwin';
  DEV_URL = `http://localhost:3000/#/search/items`;
  PROD_FILE_PATH = join(__dirname, '../index.html');
  RESOURCES_PATH = app.isPackaged
    ? join(process.resourcesPath, 'resources')
    : join(app.getAppPath(), 'resources');

  window: BrowserWindow;
  browserContext: BrowserContext;

  async bootstrap() {
    await this.initliazeElectron();
    // await this.launchBrowser();
    // await this.test();
  }

  async initliazeElectron() {
    const icon = nativeImage.createFromPath(
      `${this.RESOURCES_PATH}/icons/${this.IS_MAC ? 'logo@512.png' : 'logo@256.ico'}`,
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
      if (this.window) {
        if (this.window.isMinimized()) this.window.restore();
        this.window.focus();
        return;
      }

      this.window = new BrowserWindow({
        width: 1800,
        height: 1000,
        backgroundColor: '#36393F',
        darkTheme: true,
        show: false,
        autoHideMenuBar: true,
        frame: false,
        icon,
        webPreferences: {
          preload: join(__dirname, 'electron/preload/index.js'),
        },
      });

      if (app.isPackaged) {
        this.window.loadFile(this.PROD_FILE_PATH, {
          hash: '#/search/items',
        });

        this.window.webContents.openDevTools(); // FIXME: Remove this line
      } else {
        this.window.loadURL(this.DEV_URL);
        this.window.webContents.openDevTools(); // FIXME: Remove this line
      }

      this.window.on('ready-to-show', () => {
        this.window.show();
      });
    };

    app.on('activate', () => {
      createWindow();
    });

    app.on('second-instance', (_, argv) => {
      if (!this.IS_MAC) {
        const url = argv.find(arg => arg.startsWith('laas://'));

        if (url) {
          runDeepLinkResolver(url);
        }
      }

      createWindow();
    });

    app.on('window-all-closed', () => {
      global.win = null;
    });

    app.on('open-url', (_, url) => {
      runDeepLinkResolver(url);
    });

    app.whenReady().then(async () => {
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

      tray.on('double-click', () => createWindow());
      tray.setToolTip('LAAS');
      tray.setContextMenu(contextMenu);
    });
  }

  async launchBrowser() {
    this.browserContext = await chromium.launchPersistentContext('./chrome_user_data', {
      headless: false,
      executablePath: resolve(this.RESOURCES_PATH, 'windows/chromium/chrome.exe'),
    });
  }

  async test() {
    const page = await this.browserContext.newPage();
    await page.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'stealth.png', fullPage: true });
  }
}

export default LAAS;
