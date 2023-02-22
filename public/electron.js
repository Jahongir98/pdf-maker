const {app, BrowserWindow, ipcMain, nativeTheme} = require('electron');
const electronIsDev = require("electron-is-dev");
const path = require("path");

const createWindow = () => {
    // const win = new BrowserWindow({simpleFullscreen: true});
    // const win = new BrowserWindow({width: 1366, height: 768});
    // win.maximize();
    const win = new BrowserWindow({show: false});
    win.maximize();
    win.show();

    win.loadURL(electronIsDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
        .then(() => {
            // if (electronIsDev) win.webContents.openDevTools()
        });

    ipcMain.handle('dark-mode:toggle', () => {
        if (nativeTheme.shouldUseDarkColors) {
            nativeTheme.themeSource = 'light'
        } else {
            nativeTheme.themeSource = 'dark'
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system'
    })
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
