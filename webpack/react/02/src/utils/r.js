// 此文件为styled-components 里用于将px转化为rem的方法工具
/* eslint-disable */
function r(pxValue) {
  const ratio = 37.5; // 根据项目配置比例的方式自行设定

  // 针对template literals
  if (Array.isArray(pxValue)) {
    //
    pxValue = pxValue[0];
  }

  pxValue = parseInt(pxValue);

  return `${pxValue / ratio}rem`;
}

export default r;
