const { app, BrowserWindow } = require('electron');
// 引入node的 path 和url模块
const path = require('path');
const url = require('url');
// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];
console.log(process.argv);
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.setMenu(null);
  //判断是否是开发模式
  if (mode === 'dev') {
    mainWindow.loadURL('http://localhost:3000/'); //根据自己的端口和ip修改
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
