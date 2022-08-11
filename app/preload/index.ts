import { contextBridge, ipcRenderer, IpcRenderer } from 'electron';

export interface ElectronRendererContext {
  ipcRenderer: IpcRenderer;
}

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
});
