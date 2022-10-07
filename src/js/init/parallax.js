import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function () {
  window.addEventListener('load', () => {
    const targets = document.querySelectorAll('.js-parallax');

    targets.forEach((target) => {
      gsap.fromTo(
        target.querySelector('img'),
        {
          y: 0,
        },
        {
          y: -100, // y方向-に60px移動させる
          scrollTrigger: {
            trigger: target, // ScrollTriggerの開始位置を計算するために使用される要素
            start: 'top bottom', // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
            end: 'bottom top', // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
            scrub: 1, // 要素を1秒遅れで追従させる
            // markers: true, // 開始位置、終了位置を調整確認する際に使用します
          },
        },
      );
    });
  });
}
