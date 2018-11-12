const promoBlocks = document.querySelectorAll('.c-promo-block__body');

observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        entry.target.classList.remove('c-promo-block__body--initial');
        console.log('boom');
    }
  });
});

promoBlocks.forEach(promoBlock => {
    promoBlock.classList.add('c-promo-block__body--initial');

    observer.observe(promoBlock);
});