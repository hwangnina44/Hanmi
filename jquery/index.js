$(function () {
  $('header .menu')
    .mouseenter(function () {
      $('header .menu .submenu').stop().slideDown();
      $('header .wrap').stop().slideDown();
    })
    .mouseleave(function () {
      $('header .menu .submenu').stop().slideUp();
      $('header .wrap').stop().slideUp();
    });
});



$(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 768) {
    $('.banner .imgbox2').animate({
      left: 0,
      opacity: 1,
    },1000);

    $('.banner .imgbox1').animate(
      {
        left: 15 + '%',
        opacity: 1,
      },
      1000
    );
  }
});

$(function () {
  $('.banner .banner-title h2 b').animate({
    top: 0,
    opacity: 1,
  });

  var swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.btn .stop').click(function(e){
    e.preventDefault();
    swiper.autoplay.stop(); 
  });
});

$(function () {
  $(window).on('scroll', function () {
    // 현재 y 스크롤 위치
    var scrollTop = $(window).scrollTop();
    // 이미지 y 위치
    var img1OffsetTop = $('.company .content2').offset().top;
    console.log(scrollTop, img1OffsetTop);

    // 두 값을 비교해서
    if (scrollTop > img1OffsetTop - 1000) {
      $('.company .content2').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    }

    if (scrollTop > img1OffsetTop - 1000) {
      $('article.project').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    }
  });
});

$(function () {
  //바클릭시 메뉴
  $('header .bar').click(function (e) {
    e.preventDefault();
    $('.pop').css({
      display: 'block',
      left: 0,
    });
  });
  //닫기버튼
  $('.pop .close').click(function (e) {
    e.preventDefault();
    $('.pop').css({
        left: '100%',
      });
  });

  $('.lnb').hide();
  $('.gnb > li > a').click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle().parent().siblings().find('.lnb').slideUp();
  });
});
