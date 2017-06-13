const path = require('path');
const electron = require('electron');
const {
    app,
    BrowserWindow
} = electron;

app.on('ready', function () {

    let win = new BrowserWindow({
        width: 1000,
        height: 720,
        minWidth: 480,
        minHeight: 400,
        title: 'window-open-weird',
        vibrancy: '',
        titleBarStyle: 'hidden-inset',
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        }
    });

    win.loadURL(`file://${__dirname}/index.html?`);

});