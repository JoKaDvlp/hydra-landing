const swiper1 = new Swiper('.cta', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView : '1',
    breakpoints: {
        579: {
        slidesPerView: '3',
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.swiper-carte', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView : '1',
    breakpoints: {
        579: {
        slidesPerView: '4',
        spaceBetween: '30'
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper3 = new Swiper('.swiper-techno', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView : '1',
    breakpoints: {
        579: {
        slidesPerView: '4',
        spaceBetween: '30'
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper4 = new Swiper('.swiper-numero', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView : '1',
    breakpoints: {
        579: {
        slidesPerView: '4',
        spaceBetween: '30'
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });