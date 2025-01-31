const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow(urlToLoad) {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 1280,
    x: 0,
    y: 0,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
      media: {
        audio: true,
        video: true
      }
    }
  });

  mainWindow.loadURL(urlToLoad);

}

app.whenReady().then(() => {

  let customURL = 'https://example.com';

  const urlArg = process.argv.find(arg => arg.startsWith('--url='));
  if (urlArg) {
    customURL = urlArg.split('--url=')[1];  // Correctly extract only the URL part
  }

console.log("Full Process Arguments:", process.argv);
console.log("Extracted URL:", customURL);

  createWindow(customURL);
});


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
