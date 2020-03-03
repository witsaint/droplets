// import { T } from 'react-toast-mobile';
import wxsdk from 'weixin-js-sdk';
import axios from 'axios';
import { result } from 'lodash';
import { isIos, isWxBrowser } from './utils';

function resetUrl(realUrl) {
  window.history.replaceState(
    window.history.state,
    null,
    realUrl.replace(window.location.origin, '')
  );
}

const initShareConfig = (detailData, configInfo, realUrl) => {
  wxsdk.config({
    debug: false,
    appId: configInfo.app_id, // 必填，公众号的唯一标识
    timestamp: configInfo.timestamp, // 必填，生成签名的时间戳
    nonceStr: configInfo.nonce, // 必填，生成签名的随机串
    signature: configInfo.signature, // 必填，签名
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'updateAppMessageShareData',
      'updateTimelineShareData',
    ], // 必填，需要使用的JS接口列表
  });
  wxsdk.ready(() => {
    // 分享给好友
    wxsdk.updateAppMessageShareData({
      title: detailData.name, // 分享标题
      desc: detailData.desc, // 分享描述
      link: detailData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: detailData.imgUrl, // 自定义图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success() {
        // resetUrl(realUrl);
        // 用户确认分享后执行的回调函数
        // T.notify('分享成功');
      },
      cancel() {
        // resetUrl(realUrl);
        // 用户取消分享后执行的回调函数
        // T.notify('取消分享');
      },
      fail() {
        // resetUrl(realUrl);
        // T.notify('分享错误');
      },
    });
  });
  resetUrl(realUrl);
};

const initWxShare = async ({ name = '颜玖', img = '', landingPage }) => {
  if (!isWxBrowser()) return;
  const { href: realUrl } = window.location;
  // const { landingPage } = this.props;
  if (landingPage && isIos()) {
    window.history.replaceState(window.history.state, null, landingPage);
  }
  const { href } = window.location;
  // const { data } = this.props;
  const resParams = { url: href, platform_code: 'yanjiu' };
  // 拼装数据
  const res = await axios.get('/audit_svc/v1/wx_signature', {
    params: resParams,
  });
  const configInfo = result(res, 'data.data', {});
  // const attachments = data.attachment_list || [];
  // const coverImg = attachments.find(item => item.usage === 'cover');
  let shareUrl = realUrl;
  if (realUrl.indexOf('?') !== -1) {
    shareUrl += '&isShare=true';
  } else {
    shareUrl += '?isShare=true';
  }
  const detailData = {
    name,
    desc: '我在颜玖上发现了一个好东东，一起来看看吧~',
    link: shareUrl,
    imgUrl: img, // coverImg ? coverImg.show_url : '',
  };
  initShareConfig(detailData, configInfo, realUrl);
};

export default initWxShare;
