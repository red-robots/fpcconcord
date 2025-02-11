"use strict";

/**
 *	Custom jQuery Scripts
 *	Date Modified: 01.26.2023
 *	Developed by: Lisa DeBona
 */

jQuery(document).ready(function ($) {
  $('#menutoggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#site-navigation').toggleClass('active');
    $('body').toggleClass('mobile-menu-open');
  });
  $('li.menu-item-has-children a i').on('click', function (e) {
    e.preventDefault();
    $(this).parents('li').toggleClass('open-dropdown');
  });
  var swiper = new Swiper('.slideshow .swiper', {
    autoplay: {
      delay: 10000
    },
    speed: 500,
    loop: true,
    preventClicks: false,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    /*  "slide", "fade", "cube", "coverflow" or "flip" */
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  if ($('a.popup').length) {
    $('a.popup').each(function () {
      var target = $(this);
      var link = $(this).attr('href');
      if (link.includes('youtu')) {
        target.addClass('video-link');
      }
    });
  }
  Fancybox.bind(".popup", {
    Image: {
      Panzoom: {
        zoomFriction: 0.7,
        maxScale: function maxScale() {
          return 5;
        }
      }
    },
    Html: {
      video: {
        autoplay: true
      }
    }
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 4,
        nav: false
      },
      1000: {
        items: 6,
        nav: false,
        loop: false
      }
    },
    onInitialized: function onInitialized() {
      $('.owl-item.active').each(function () {
        if ($(this).find('img').length == 0) {
          $(this).remove();
        }
      });
    }
  });
});