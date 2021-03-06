$(".header__link-decor, .header__online-link, .header__tel").click(function () {
  $(".menu-btn").removeClass('menu-btn_active');
  $(".header").removeClass('header--active');
});
$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/

  if (height > 125) {
    $('.header').addClass('header--fixed');
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $('.header').removeClass('header--fixed');
  }
});
$(".menu-btn").click(function (e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $(".header").toggleClass('header--active');
});
jQuery(document).ready(function ($) {
  var url = document.location.href;
  $.each($(".header__link"), function () {
    if (this.href == url) {
      $(this).addClass('header__link--active');
    }
  });
});
jQuery(document).ready(function ($) {
  var url = document.location.href;
  $.each($(".header__dropdown-link"), function () {
    if (this.href == url) {
      $(this).addClass('header__dropdown-link--active');
      $('.header__item-drop').addClass('header__link--active');
    }
  });
});
$('.spec__slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  prevArrow: "<div class='arrow-wrap prev'><i class='fas fa-long-arrow-alt-left '></i></div>",
  nextArrow: "<div class='arrow-wrap next'><i class='fas fa-long-arrow-alt-right '></i></div>",
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 993,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
/* the viewport is less than 768 pixels wide */

$('.our-command__wrap').slick({
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  adaptiveHeight: true,
  prevArrow: "<div class='arrow-wrap prev'><i class='fas fa-long-arrow-alt-left '></i></div>",
  nextArrow: "<div class='arrow-wrap next'><i class='fas fa-long-arrow-alt-right '></i></div>",
  responsive: [{
    breakpoint: 993,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 569,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 481,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.rewiew__inner').slick({
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  adaptiveHeight: true,
  prevArrow: "<div class='arrow-wrap prev'><i class='fas fa-long-arrow-alt-left '></i></div>",
  nextArrow: "<div class='arrow-wrap next'><i class='fas fa-long-arrow-alt-right '></i></div>",
  responsive: [{
    breakpoint: 1401,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 993,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.about__slider').slick({
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  adaptiveHeight: true,
  prevArrow: "<div class='arrow-wrap prev'><i class='fas fa-long-arrow-alt-left '></i></div>",
  nextArrow: "<div class='arrow-wrap next'><i class='fas fa-long-arrow-alt-right '></i></div>"
});
$('.equipment__slider').slick({
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  adaptiveHeight: true,
  asNavFor: '.equipment__nav',
  prevArrow: "<div class='arrow-wrap prev'><i class='fas fa-long-arrow-alt-left '></i></div>",
  nextArrow: "<div class='arrow-wrap next'><i class='fas fa-long-arrow-alt-right '></i></div>"
});
$('.equipment__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.equipment__slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active"); // $('.panel').removeClass('panel--active')

    /* Toggle between hiding and showing the active panel */

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(".rewiew__open").click(function (e) {
  e.preventDefault();
  $(this).prev().find('.rewiew__text').parent().toggleClass('rewiew__wrap--active');
  $(this).parent().toggleClass('rewiew__item--active');
  $.fn.extend({
    toggleText: function (a, b) {
      return this.text(this.text() == b ? a : b);
    }
  });
  $(this).toggleText('подробнее', 'скрыть');
});
$('#ser1').click(function () {
  $('#item1').addClass('services__item--active');
  $('#item2, #item3, #item4, #item5, #item6, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser2, #ser3, #ser4, #ser5, #ser6, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser2').click(function () {
  $('#item2').addClass('services__item--active');
  $('#item1, #item3, #item4, #item5, #item6, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser3, #ser4, #ser5, #ser6, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser3').click(function () {
  $('#item3').addClass('services__item--active');
  $('#item1, #item2, #item4, #item5, #item6, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser4, #ser5, #ser6, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser4').click(function () {
  $('#item4').addClass('services__item--active');
  $('#item1, #item2, #item3, #item5, #item6, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser5, #ser6, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser5').click(function () {
  $('#item5').addClass('services__item--active');
  $('#item1, #item2, #item3, #item4, #item6, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser4, #ser6, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser6').click(function () {
  $('#item6').addClass('services__item--active');
  $('#item1, #item2, #item3, #item4, #item5, #item7, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser4, #ser5, #ser7, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser7').click(function () {
  $('#item7').addClass('services__item--active');
  $('#item1, #item2, #item3, #item4, #item5, #item6, #item8, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser4, #ser5, #ser6, #ser8, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser8').click(function () {
  $('#item8').addClass('services__item--active');
  $('#item1, #item2, #item6, #item4, #item5, #item6, #item7, #item9').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser4, #ser5, #ser6, #ser7, #ser9').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('#ser9').click(function () {
  $('#item9').addClass('services__item--active');
  $('#item1, #item2, #item3, #item4, #item5, #item6, #item7, #item8').removeClass('services__item--active');
  $('#ser1, #ser2, #ser3, #ser4, #ser5, #ser6, #ser7, #ser8').removeClass('panel__item--active');
  $(this).addClass('panel__item--active');
});
$('.services__item-link').click(function (e) {
  e.preventDefault();
  $(this).children('.services__item-popup').toggleClass('services__item-popup--active');
  $('body').toggleClass('overflow');
});
$('.popup__open').click(function (e) {
  e.preventDefault();
  $('.popup').addClass('popup--active');
  $('body').addClass('overflow');
});
$('.popup__closer, .popup__cancel').click(function () {
  $('.popup').removeClass('popup--active');
  $('body').removeClass('overflow');
});
$('.price-popup__open').click(function (e) {
  e.preventDefault();
  $('.price-popup').addClass('price-popup--active');
  $(".menu-btn").removeClass('menu-btn_active');
  $(".header").removeClass('header--active');
  $('body').addClass('overflow');
});
$('.price-popup, .price-popup__closer, .price-popup__cancel').click(function () {
  $('.price-popup').removeClass('price-popup--active');
  $('body').removeClass('overflow');
});
$('.popup-sogl__open').click(function (e) {
  e.preventDefault();
  $('.popup-sogl').addClass('popup-sogl--active');
  $(".menu-btn").removeClass('menu-btn_active');
  $(".header").removeClass('header--active');
  $('body').addClass('overflow');
});
$('.popup-sogl, .popup-sogl__closer, .popup-sogl__cancel').click(function () {
  $('.popup-sogl').removeClass('popup-sogl--active');
  $('body').removeClass('overflow');
});
$('.politics__open').click(function (e) {
  e.preventDefault();
  $('.politics').addClass('politics--active');
  $(".menu-btn").removeClass('menu-btn_active');
  $(".header").removeClass('header--active');
  $('body').addClass('overflow');
});
$('.politics, .politics__closer, .politics__cancel').click(function () {
  $('.politics').removeClass('politics--active');
  $('body').removeClass('overflow');
});