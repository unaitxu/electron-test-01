'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 400
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
