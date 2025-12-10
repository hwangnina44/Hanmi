///재단소개.js
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
  //클릭시 상단바 css변경
  $('.sub-menu .list li').click(function () {
    $('.sub-menu .list li').removeClass('on').addClass('off');
    $(this).addClass('on').removeClass('off');
  });
  //초기 쎄팅

  $('.contentbox .content1').show().siblings().hide();
  $('.list li.content1').click(function () {
    $('.contentbox .content1').show().siblings().hide();
  });
  $('.list li.content2').click(function () {
    $('.contentbox .content2').show().siblings().hide();
  });
  $('.list li.content3').click(function () {
    $('.contentbox .content2').show().siblings().hide();
  });

  ///컨텐츠
  $(window).on('scroll', function () {
    // 현재 y 스크롤 위치
    var scrollTop = $(window).scrollTop();
    // 이미지 y 위치
    var img2OffsetTop = $('.content1 .con2').offset().top;
    var img3OffsetTop = $('.content1 .con3').offset().top;
    var img4OffsetTop = $('.content1 .con4').offset().top;
    var img5OffsetTop = $('.content1 .con5').offset().top;
    var img6OffsetTop = $('.content1 .con6').offset().top;
    console.log(scrollTop, img3OffsetTop);

    var hide = {
      top: -100,
      opacity: 0,
      transition: 'all 0.6s',
    };
    var show = {
      top: 0,
      opacity: 1,
      transition: 'all 0.6s',
    };

    // 두 값을 비교해서
    if (scrollTop > img2OffsetTop - 1000) {
      $('.content1 .con2').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    } else if (scrollTop < img2OffsetTop - 1000) {
      $('.content1 .con2').css(hide);
    }

    if (scrollTop > img3OffsetTop - 1000) {
      $('.content1 .con3').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    } else if (scrollTop < img2OffsetTop - 1000) {
      $('.content1 .con3').css(hide);
    }

    if (scrollTop > img4OffsetTop - 1000) {
      $('.content1 .con4').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    } else if (scrollTop < img4OffsetTop - 1000) {
      $('.content1 .con4').css(hide);
    }

    if (scrollTop > img5OffsetTop - 1000) {
      $('.content1 .con5').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    } else if (scrollTop < img5OffsetTop - 1000) {
      $('.content1 .con5').css(hide);
    }

    if (scrollTop > img6OffsetTop - 1200) {
      $('.content1 .con6').css({
        top: 0,
        opacity: 1,
        transition: 'all,0.6s',
      });
    } else if (scrollTop < img6OffsetTop - 1000) {
      $('.content1 .con6').css(hide);
    }

    var yaer1 = $('.point1').offset().top;
    var yaer2 = $('.point2').offset().top;

    console.log(scrollTop);
    if (scrollTop >= 0 && scrollTop < 1200) {
      $('.date p').eq(0).addClass('on').siblings().removeClass('on'); // 첫 번째 p 강조
    } else if (scrollTop >= 1200 && scrollTop < 1600) {
      $('.date p').eq(1).addClass('on').siblings().removeClass('on'); // 두 번째 p 강조
    } else if (scrollTop >= 1600 && scrollTop < 2000) {
      $('.date p').eq(2).addClass('on').siblings().removeClass('on'); // 세 번째 p 강조
    } else {
      // 범위 밖일 때 첫 번째 강조 등 필요 시 처리
      $('.date p').eq(0).addClass('on').siblings().removeClass('on');
    }
  });
});
