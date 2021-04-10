const swiper = new Swiper('.channel-slider', {
 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 4,
    },
    
      1200: {
      slidesPerView: 4,
    },
      992: {
      slidesPerView: 3,
    },
      760: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.channel-button-first',
    prevEl: '.channel-button-second',
  },

  
});

const swiperMiddle = new Swiper('.channel-slider--middle', {

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1300: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.channel-button-third',
    prevEl: '.channel-button-four',
  },

  
});


const swiperLast = new Swiper('.channel-slider--last', {
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 4,
    },
    
      1200: {
      slidesPerView: 4,
    },
      992: {
      slidesPerView: 3,
    },
      760: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.channel-button-five',
    prevEl: '.channel-button-six',
  },

  
});

const mobileSearch = document.querySelector(".input-group");
const searchBtn = document.querySelector(".mobile-search").addEventListener("click", () => {
  mobileSearch.classList.toggle("is-open");
});



if(document.documentElement.scrollWidth <= 640){
  swiper.destroy();
  swiperMiddle.destroy();
  swiperLast.destroy();
}





