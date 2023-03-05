const swiperTree = new Swiper(".swiper",{
  direction:"horizontal",
  slidesperView:4,
  spaceBetween:10,
  centeredSlidex:true,
  loop:true,
  autoplay:{
    delay: 100,
    disableOnInteraction:false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  }
}
)


function controlAutoPlay(){
  if(swiperTree.autoplay.running === false) {
    swiperTree.autoplay.start();
  } else {
    swiperTree.autoplay.stop();
  }
  console.log(swiperTree.autoplay);
}
