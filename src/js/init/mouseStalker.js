import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function () {
  let cursor = document.querySelector('.js-cursor'),
    link = document.querySelectorAll('.js-link-mousestalker'),
    pos = { x: 0, y: 0 }, // カーソル要素の座標
    mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
    speed = 0.5; // 0.01〜1 数値が大きほど早い

  // カーソルの座標を設定する
  let cursorSetX = gsap.quickSetter(cursor, 'x', 'px');
  let cursorSetY = gsap.quickSetter(cursor, 'y', 'px');

  // マウスカーソル座標を取得する
  document.addEventListener('mousemove', function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // レンダリングする
  gsap.ticker.add(function () {
    let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    cursorSetX(pos.x);
    cursorSetY(pos.y);
  });

  // マウスイベント
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', function () {
      cursor.classList.add('is-active');
    });

    link[i].addEventListener('mouseleave', function () {
      cursor.classList.remove('is-active');
    });
  }
}
