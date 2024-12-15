import { app, shell, BrowserWindow, screen } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

let MainWindow: BrowserWindow | null

const createMainWindow = () => {
  const preloadPath = is.dev
    ? join(__dirname, '../preload/index.js')
    : join(__dirname, '..', 'preload/index.js')

  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize

  const windowWidth = 1100
  const windowHeight = 780

  const x = Math.floor((screenWidth - windowWidth) / 2)
  const y = Math.floor((screenHeight - windowHeight) / 2)

  // Create the browser window.
  MainWindow = new BrowserWindow({
    width: 1100,
    height: 710,
    minWidth: 1100,
    minHeight: 710,
    x,
    y,
    show: true, // 主窗口在加载完内容之前不显示
    frame: false, // 无边框
    webPreferences: {
      preload: preloadPath,
      sandbox: false, // 根据需求启用或禁用沙盒
      nodeIntegration: true,
      contextIsolation: false, // 关闭上下文隔离
      devTools: false
    }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    MainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    const mainHtmlPath = join(app.getAppPath(), 'out/renderer/index.html')
    MainWindow.loadFile(mainHtmlPath).catch((err) =>
      console.error('Failed to load main window:', err)
    )
  }

  // 监听外部链接点击
  MainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  MainWindow.on('close', (e) => {
    if (!(app as any).isQuiting) {
      e.preventDefault() // 阻止窗口关闭
      MainWindow?.hide() // 隐藏窗口
      MainWindow?.setSkipTaskbar(false) // 确保任务栏可见
    }
  })

  return MainWindow
}

export { MainWindow, createMainWindow }
