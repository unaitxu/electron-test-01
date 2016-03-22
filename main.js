var app = require('app');
var BrowserWindow = require('browser-window');
var Tray = require('tray');
var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    height: 253,
    width: 385,
    frame: false,
    center: true,
    resizable: false,
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
