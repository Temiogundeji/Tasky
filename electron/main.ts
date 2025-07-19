import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

const isDev = process.env.NODE_ENV === "development";

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
  } else {
    win.loadURL(
      url
        .pathToFileURL(path.join(__dirname, "../dist-renderer/index.html"))
        .toString()
    );
  }
}

app.whenReady().then(createWindow);
