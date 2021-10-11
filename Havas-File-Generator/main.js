const { app, BrowserWindow } = require("electron");

let appWin;

createWindow = () => {
  appWin = new BrowserWindow({
    title: "Angular and Electron",
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  });
  appWin.maximize();
  appWin.show();

  //appWin.loadURL(`file://${__dirname}/dist/index.html`);
  appWin.loadURL(`http://localhost:4200`);

  appWin.setMenu(null);

  appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
