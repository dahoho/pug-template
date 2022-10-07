// import "@babel/polyfill"; // IE対応する場合、コメント解除

// ブラウザ（デバイス）分岐処理
import UaParser from 'ua-parser-js';
const uaParser = new UaParser();
const browser = uaParser.getBrowser().name;

// sleep処理
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ページ分岐処理
// const page = document.querySelector('.js-page');
// const pageId = page.getAttribute('data-page-id');

// asyncが付いていないとawait sleep()は使用不可
const init = async () => {
  // sleep処理
  // await sleep(100);

  // require('./init/hamburger').default(); ハンバーガーメニュー
  // require('./init/accordion').default(); アコーディオン
  // require('./init/scrollTrigger').default(); スクロールトリガー
  // require('./init/modal').default(); モーダル
  // require('./init/SmoothScrollTrigger').default(); スムーススクロール
  // require('./init/swiper').default(); swiper
  // require('./init/mouseStalker').default(); マウスストーカー
  // require('./init/parallax').default(); パララックス
  // require('./init/scrollhint').default(); スクロールヒント
  // require('./init/ie').default(); IE

  // ブラウザ（デバイス）分岐処理
  const HtmlElement = document.querySelector('html');
  switch (browser) {
    case 'Chrome':
      HtmlElement.classList.add('is-chrome');
      break;
    // case 'Safari':
    //   HtmlElement.classList.add('is-safari');
    //   break;
    // case 'IE':
    //   require('./init/ie').default();
    //   break;
    default:
  }
  // ページ分岐処理
  // switch (pageId) {
  //   case 'index':
  //     break;
  //   default:
  // }
};

init();
