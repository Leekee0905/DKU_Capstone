const { app, BrowserWindow, Menu, Shell, shell, contentTracing } = require('electron') 
const path = require('path') 
const { Link } = require('react-router-dom')
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

const template=[
  {
    label: "File", 
    submenu: [ 
      { 
        label: "Home" ,
        click:function(){
          console.log("open");
          window.location.hash = '#/Home';
        }
        
      },
      { 
          role: 'toggleDevTools', 
      },
      {
        label: 'Goback',
        click: function(){
          history.back();
        }
      }
    ] 
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
      ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  },
  {
    label: "Git",
    submenu: [
      {
        label: "Github",
        click: function(){
          shell.openExternal("https://github.com")
        }
      }
    ]
  }
];
const menu = Menu.buildFromTemplate(template); 
Menu.setApplicationMenu(menu);