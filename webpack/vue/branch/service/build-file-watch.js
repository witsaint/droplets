const fs = require('fs');
const mkdir = require('./file-module');

const fileName = {
  scripts: [],
  styles: [],
  name: 'brancha',
  host: '//127.0.0.1:8081',
};
try {
  const files = fs.readdirSync('D:/workplace/droplets/webpack/vue/branch/dist');
  files.forEach((item, index) => {
    const stat = fs.lstatSync(`D:/workplace/droplets/webpack/vue/branch/dist/${item}`);
    if (stat.isDirectory() === false) {
      if (item.endsWith('js')) {
        fileName.scripts.push(item);
      } else if (item.endsWith('css')) {
        fileName.styles.push(item);
      }
    }
  });
  fs.writeFile('D:/workplace/droplets/webpack/vue/file-system/build.json', JSON.stringify({ brancha: fileName }), (err) => {
    console.log('err', err);
  });
} catch (e) {
  console.log('获取build后文件异常', e);
}

console.log(fileName);
