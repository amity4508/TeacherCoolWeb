var swiper = new Swiper(".myOnlineAssignment", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    centeredSlides: true,
    loop: true,
  direction: 'horizontal', 
 
  grabCursor: true,
  centeredSlidesBounds: true,
  slideToClickedSlide: true,
  // simulateTouch: false,
  autoplay: {
    enabled: true,
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,

  speed: 1000,

  effect: 'slide',
  loopAdditionalSlides: 0,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
        499: {
            slidesPerView: 1,
        },
        499: {
          slidesPerView: 1,
      },
   
      768: {
        slidesPerView: 2,
    },
        999: {
            slidesPerView: 3,
        }
    }
  });

  // nearYour section 

  var swiper = new Swiper(".mynearYou", {
    centeredSlides: true,
    loop: true,
  direction: 'horizontal', 
  grabCursor: true,
  centeredSlidesBounds: true,
  slideToClickedSlide: true,
  simulateTouch: false,
  autoplay: {
    enabled: true,
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 1000,
  effect: 'slide',
  loopAdditionalSlides: 0,
    spaceBetween: 20,
    breakpoints: {
        499: {
            slidesPerView: 1,
        },  
      768: {
        slidesPerView: 2,
    },
        999: {
            slidesPerView: 2,
  
        }
    }
  });


  // testimonil 
  
  var swiper = new Swiper(".mytestiMonial", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    centeredSlides: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  });
