import React from 'react';
import ReactDOM from 'react-dom';
import Toast from 'react-toast-mobile';
import './src/assets/css/toast.less';
import { init, setUID } from './src/utils/jftrack';
import './src/utils/axios_global_config';
import './index.css';
import Routes from './src/router/base';
import Adopt from './src/utils/adopt';
import vConsole from 'vconsole';
import FastClick from 'fastclick';
FastClick.attach(document.body);

new Adopt();

// 获取并保存traffic_id 和 channel_id
const link1 = location.hash
const link2 = location.search
const arr1 = (link1 && link1.split('?')[1]) ? link1.split('?')[1].split('&') : []
const arr2 = (link2 && link2.split('?')[1]) ? link2.split('?')[1].split('&') : []
const arr = arr1.concat(arr2)
let obj = {}
arr.forEach(item => {
  obj[item.split('=')[0]] = item.split('=')[1]
})
let oldChannel_id = localStorage.getItem('channel_id');
let oldTraffic_id = localStorage.getItem('traffic_id');
let oldAuth = localStorage.getItem('auth');
if (oldChannel_id && oldChannel_id.includes('data')){
  localStorage.removeItem('channel_id')
}; // 代表原项目有缓存
if (oldAuth && oldAuth.includes('data')){
  localStorage.removeItem('auth')
}; // 代表原项目有缓存
if(obj.channel_id != oldChannel_id){
  localStorage.removeItem('city');
}
if(obj.channel_id || !oldChannel_id || oldChannel_id.includes('data')){
  localStorage.setItem('channel_id', obj.channel_id || 1)
}
if(obj.traffic_id || !oldTraffic_id || oldTraffic_id.includes('data')){
  localStorage.setItem('traffic_id', obj.traffic_id || 10000)
}
if(obj.entrance_id){
  localStorage.setItem('entrance_id', Number(obj.entrance_id))
}

let trackConfig = {
  isSpa: false,
  bizInfo: {
    channel: 'dayima',
    platform: 'M107000037',
    biz_id: 'mall',
    v: '1.1',
  },
  extra: {
    traffic_id: obj.traffic_id || '',
    entrance_id: obj.entrance_id || '',
    channel_id: obj.channel_id || ''
  }
}
if(process.env.NODE_ENV !== 'production'){
  let vconsole = new vConsole();
  trackConfig.host = __TRACKURL__;
}

init(trackConfig);
const Uid = localStorage.getItem('Uid');
if(Uid){
  setUID(Uid);
}//设置uid到track


// 地理位置
// localStorage.removeItem('geo');
// getLocation().then(geo => {
//   console.log('app处geo', geo)
//   const geoObj = {
//     latitude: geo.latitude,
//     longitude: geo.longitude,
//   };
//   localStorage.setItem('geo', JSON.stringify(geoObj));
//   addressBloc.fetchCityNearest(geoObj.latitude, geoObj.longitude);
//   // if (geo.latitude) {
//   //   // this.addressBloc.fetchCityNearest(31.231706, 121.472644);
//   //   //   let geoObj = {
//   //   //     latitude: 31.231706,
//   //   //     longitude: 121.472644
//   //   //   };
//   //   // localStorage.setItem('geo', JSON.stringify(geoObj));
//   //   const geoObj = {
//   //     latitude: geo.latitude,
//   //     longitude: geo.longitude,
//   //   };
//   //   localStorage.setItem('geo', JSON.stringify(geoObj));
//   //   this.addressBloc.fetchCityNearest(geo.latitude, geo.longitude);
//   // }
// });

ReactDOM.render(<div><Toast /><Routes /></div>, document.getElementById('root'));

