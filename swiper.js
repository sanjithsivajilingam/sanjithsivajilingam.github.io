const swiper = new Swiper('.swiper', {
  autoplay:{
      delay:5000,
      disableOnInteraction: false,
  },
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  autoplay: {
    delay: 45000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper2-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // Get the active slide
      const activeSlide = this.slides[this.activeIndex];
      // Check if the slide contains a video element
      const videoElement = activeSlide.querySelector('video');
      if (videoElement) {
        // Restart the video by resetting its currentTime
        videoElement.currentTime = 0;
        videoElement.play();
      }
    },
  },
});

const swiper4 = new Swiper('.swiper4', {
  autoplay:{
      delay:5000,
      disableOnInteraction: false,
  },
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper4-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
