const { app, BrowserWindow } = require('electron') 
const path = require('path') 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 1920, 
    height: 1080, 
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    } 
  }) 
  win.loadURL("http://localhost:3000")

  win.webContents.openDevTools()
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})