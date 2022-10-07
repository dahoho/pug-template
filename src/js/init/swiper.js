// import Swiper from 'swiper'; // 最小限の機能読み込み
// import Swiper from 'swiper/bundle'; // 全機能を読み込む場合
import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'; // 機能を追加する場合
import '../style/swiper/swiper-bundle.scss';

export default function () {
  Swiper.use([Autoplay, Navigation, Pagination, Scrollbar]);
  const option = {
    // 全機能を読み込む場合有効
    // effect: 'flip',
    // デフォルト設定
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {},
    loop: true,
    // 以下機能追加設定
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // フリック後も止まらないように設定
    },
    // 以下IEで有効化するためには、CSSのカスタマイズが必要
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  };
  const swiper = new Swiper('.js-silde-swiper', option); // eslint-disable-line
}
