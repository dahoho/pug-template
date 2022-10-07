export default function () {
  // ios時の背景固定
  let scrollPosition;
  const ua = window.navigator.userAgent.toLowerCase();
  const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document);
  const body = document.querySelector('body');

  function bodyFixedOn() {
    if (isiOS) {
      scrollPosition = window.pageYOffset;
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
    } else {
      body.style.overflow = 'hidden';
    }
  }

  function bodyFixedOff() {
    if (isiOS) {
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      window.scrollTo(0, scrollPosition);
    } else {
      body.style.removeProperty('overflow');
    }
  }

  const trigger = document.querySelector('.js-header-trigger');
  const navi = document.querySelector('.js-navi');

  trigger.addEventListener('click', () => {
    if (trigger.getAttribute('aria-expanded') === 'true') {
      bodyFixedOff();
      trigger.setAttribute('aria-expanded', 'false');
      trigger.classList.remove('is-active');
      navi.classList.remove('is-open');
      navi.setAttribute('aria-hidden', 'true');
    } else {
      bodyFixedOn();
      trigger.setAttribute('aria-expanded', 'true');
      trigger.classList.add('is-active');
      navi.classList.add('is-open');
      navi.setAttribute('aria-hidden', 'false');
    }
  });

  // naviBg.addEventListener('click', () => {
  //   trigger.click();
  // });
}
