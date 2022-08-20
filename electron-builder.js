const builder = require('electron-builder');
const Platform = builder.Platform;

const options = {
  productName: 'ElectronReactAppTest',
  appId: 'electron.react.app',
  directories: {
    output: 'dist',
  },
  files: ['build/**/*', 'main.js', 'preload.js'],
  win: {
    target: 'nsis',
  },
  nsis: {
    deleteAppDataOnUninstall: true,
    include: 'installer/win/nsis-installer.nsh',
  },
  electronDownload: {
    mirror: 'https://npm.taobao.org/mirrors/electron/',
  },
  extends: null,
  mac: {
    target: 'pkg',
  },
  //   linux: {
  //     desktop: {
  //       StartupNotify: 'false',
  //       Encoding: 'UTF-8',
  //       MimeType: 'x-scheme-handler/deeplink',
  //     },
  //     target: ['AppImage', 'rpm', 'deb'],
  //   },
  //   deb: {
  //     priority: 'optional',
  //     afterInstall: 'installer/linux/after-install.tpl',
  //   },
  //   rpm: {
  //     fpm: ['--before-install', 'installer/linux/before-install.tpl'],
  //     afterInstall: 'installer/linux/after-install.tpl',
  //   },
};

// Promise is returned
builder
  .build({
    targets: Platform.MAC.createTarget(),
    config: options,
  })
  .then((result) => {
    console.log(JSON.stringify(result));
  })
  .catch((error) => {
    console.error(error);
  });
