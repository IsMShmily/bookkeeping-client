import { app, ipcMain } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { createMainWindow, MainWindow } from './windows/main.window'

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createMainWindow()

  app.on('activate', () => {
    if (MainWindow?.isMinimized()) {
      MainWindow.restore()
    }
    if (!MainWindow?.isVisible()) {
      MainWindow?.show()
    }
  })
})

app.on('before-quit', () => {
  ;(app as any).isQuiting = true
})

// 所有窗口关闭时退出应用（在 Mac 上除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 主进程错误捕获
process.on('uncaughtException', (error) => {
  console.error('Unhandled Error:', error)
})
