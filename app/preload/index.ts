import { contextBridge, ipcRenderer, IpcRenderer } from 'electron';

import { AppControlAction } from '../ipcs/general';
import { DiscordUser } from '../stores/config';
import { ConfigStoreValues } from '../stores/config';

export interface ElectronRendererContext {
  ipcRenderer: IpcRenderer;
  onceOAuthDiscord: (callback: (user: DiscordUser) => void) => void;
  appControl: (action: AppControlAction) => void;
  openExternal: (link: string) => void;
  getConfig: () => Promise<ConfigStoreValues>;
  setConfig: (config: ConfigStoreValues) => Promise<ConfigStoreValues>;
  getVersion: () => Promise<string>;
}

const electronContext: ElectronRendererContext = {
  ipcRenderer: ipcRenderer,
  onceOAuthDiscord: callback => ipcRenderer.once('oauth/discord', (_, user) => callback(user)),
  appControl: action => ipcRenderer.send('appControl', action),
  openExternal: link => ipcRenderer.send('openExternal', link),
  getConfig: () => ipcRenderer.invoke('getConfig'),
  setConfig: config => ipcRenderer.invoke('setConfig', config),
  getVersion: () => ipcRenderer.invoke('getVersion'),
};

contextBridge.exposeInMainWorld('electron', electronContext);
