import { app, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';

import { updateStore } from '../stores/update';
import { initlizeUpdater } from '../utils/updater';

ipcMain.handle('getVersion', async () => {
  return app.getVersion();
});

ipcMain.handle('getUpdaterStatus', async () => {
  return updateStore.get('status');
});

ipcMain.on('checkForUpdate', async () => {
  autoUpdater.checkForUpdates();
});

ipcMain.on('quitAndInstall', async () => {
  autoUpdater.quitAndInstall();
});

ipcMain.once('initlizeUpdater', async () => {
  initlizeUpdater();
});
