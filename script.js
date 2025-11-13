var swiper = new Swiper(".blog-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});


var swiper = new Swiper('.testimonial-swiper', {
  // effect: "coverflow",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1560: {
      slidesPerView: 3
    }
  }
});



