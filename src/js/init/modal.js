// 参考サイト：https://www.evoworx.co.jp/blog/accessibility-modal/
import 'micromodal';

export default function () {
  MicroModal.init({
    disableScroll: true, //ページのスクロールを無効
    awaitOpenAnimation: true, //アニメーション有効時はtrue
    awaitCloseAnimation: true, //アニメーション有効時はtrue
  });
}
