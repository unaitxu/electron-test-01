var app = require('app');
var BrowserWindow = require('browser-window');
var Tray = require('tray');
var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    height: 213,
    width: 400,
    frame: false,
    center: true,
    // resizable: false,
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
