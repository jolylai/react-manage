const config ={
  //目标网站
  target: process.env.NODE_ENV !== 'production' ? 'http://admin.jolylai.com' : 'http://admin.jolylai.com',
  name: 'Ant design Admin',
  footerText: '智能楼宇后台管理系统 版权所有 © 2017 由 jolylai 支持',
  // ant图片
  logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
  logoText: 'Antd Admin',
  needLogin: true
};

const Tool = {};

// 参数格式化 ?key=value&key=value
Tool.paramFormate = data => {
  let paramArr = [];
  let paramStr = '';
  for (let attr in data) {
    paramArr.push(attr + '=' + data[attr]);
  }
  paramStr = paramArr.join('&');
  paramStr = '?' + paramStr;
  return paramStr
};

/**
 * 本地数据存储或读取
 *
 * @param  key
 * @param {any} value
 * @returns
 */

Tool.localItem = function(key,value){
  if (arguments.length == 1){
    return localStorage.getItem(key);
  }else {
    return localStorage.setItem(key,value);
  }
};
/**
 * 删除本地数据
 *
 * @param  key
 * @returns
 */
Tool.removeLocalItem = (key) => {
  return key ? localStorage.removeItem(key) : localStorage.removeItem();
};

export { config,Tool };
