export default function () {
  const options = {
    root: null, // 今回はビューポートをルート要素とする
    threshold: 1, // 閾値は0
    // rootMargin: '0px 0px -20% 0px',
  };
  const observer = new IntersectionObserver(callback, options);

  // 監視対象
  const targets = document.querySelectorAll('.js-scrollTrigger');

  // それぞれの監視対象を監視する
  targets.forEach((target) => observer.observe(target));

  function callback(entries) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }
}
