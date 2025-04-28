
$(document).ready(function(){

  AOS.init();

  $("header .gnb > li .depth2").hide();

  $(".gnb > li").hover(function(){
    $(this).children(".depth2").stop().slideToggle();
  });

  $(".ham").click(function(){
    $(".mgnb-wrap").animate({"left" : "0"});
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({"left" : "100%"});
  });

  $("header .mgnb > li .mdepth2").hide();

  $(".mgnb > li").click(function(){
    if( $(this).children(".mdepth2").css("display") == "none"){
      $(this).children(".mdepth2").slideDown();
      $(this).siblings().children(".mdepth2").slideUp();
    }
    else{
      $(this).children(".mdepth2").slideUp();
    }
  });

  const banner_list = new Swiper(".banner-list", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
    },

    speed: 1000,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const menu_list = new Swiper(".menu-list", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    slidesPerView: 1.5,

    spaceBetween: 10,

    loop: true,

    speed: 1000,

    centeredSlides: true,

    breakpoints: { 
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});