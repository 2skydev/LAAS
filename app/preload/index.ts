import { contextBridge, ipcRenderer } from 'electron';

import { AppControlAction } from '../ipcs/general';
import { DiscordUser } from '../stores/config';
import { ConfigStoreValues } from '../stores/config';
import { UpdateEvent, UpdateStatus } from '../utils/updater';

export interface ElectronRendererContext {
  onceOAuthDiscord: (callback: (user: DiscordUser) => void) => void;
  onUpdate: (callback: (event: UpdateEvent, data: any) => void) => void;

  initlizeUpdater: () => void;
  appControl: (action: AppControlAction) => void;
  openExternal: (link: string) => void;
  checkForUpdate: () => void;

  getConfig: () => Promise<ConfigStoreValues>;
  setConfig: (config: ConfigStoreValues) => Promise<ConfigStoreValues>;

  getVersion: () => Promise<string>;
  getUpdaterStatus: () => Promise<UpdateStatus>;
}

const electronContext: ElectronRendererContext = {
  onceOAuthDiscord: callback => ipcRenderer.once('oauth/discord', (_, user) => callback(user)),
  onUpdate: callback => ipcRenderer.on('update', (_, event, data) => callback(event, data)),

  initlizeUpdater: () => ipcRenderer.send('initlizeUpdater'),
  appControl: action => ipcRenderer.send('appControl', action),
  openExternal: link => ipcRenderer.send('openExternal', link),
  checkForUpdate: () => ipcRenderer.send('checkForUpdate'),

  getConfig: () => ipcRenderer.invoke('getConfig'),
  setConfig: config => ipcRenderer.invoke('setConfig', config),

  getVersion: () => ipcRenderer.invoke('getVersion'),
  getUpdaterStatus: () => ipcRenderer.invoke('getUpdaterStatus'),
};

contextBridge.exposeInMainWorld('electron', electronContext);
