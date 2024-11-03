var story_text = new Swiper('.swiper-story-text', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    loopedSlides: 3,
    resizeObserver:true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
});

var story = new Swiper('.swiper-story', {
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    touchRatio: 0,
    navigation: {
        nextEl: '.story-next',
        prevEl: '.story-prev',
      },
      pagination: {
        el: '.story-pagination',
        clickable: 'true',
      },
    breakpoints: {
        0: {
          slidesPerView: 1.9,
          spaceBetween: 16,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 3,
        },
  }

});



story_text.controller.control = story;
story.controller.control = story_text;