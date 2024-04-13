document.addEventListener('DOMContentLoaded', function(){
  // 監視対象の要素を選択
  const targetElement = document.querySelector('.Slider');
  const fixedElm = document.querySelector('.Slider__ContentWrapper');
  const callback = (entries) => {
      entries.forEach(entry => {
      if (!entry.isIntersecting && entry.boundingClientRect.top != 0) {
        fixedElm.classList.remove('top');
      } else {
        fixedElm.classList.add('top');
      }
      });
  };
  const options = {
      root: null, // ビューポートをルートとして使用
      rootMargin: '-1% 0% -99% 0%',
      threshold: 0 // 要素の見え始めと見えなくなり始めを検出
  };
  // IntersectionObserverをインスタンス化して要素を監視開始
  const observer = new IntersectionObserver(callback,options);
  observer.observe(targetElement);
})
