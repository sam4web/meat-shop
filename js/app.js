// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
  $('.back-to-top').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

$(window).scroll(() => {
  let scrollPosition = $(window).scrollTop();
  console.log(scrollPosition);
  if (scrollPosition > 150) {
    $('.back-to-top').fadeIn();
    $('.header').addClass('fixed');
  } else {
    $('.back-to-top').fadeOut();
    $('.header').removeClass('fixed');
  }
});

//set Active link according to pages
let origin = window.location.origin;
let page_location = window.location.href.replace(origin + '/', '').trim();
// console.log(page_location);
$('.navbar_links a[href*="' + page_location + '"]')
  .addClass('active')
  .siblings()
  .removeClass('active');

if (page_location == '' || null) {
  $('.navbar_links a[href="/"]')
    .addClass('active')
    .siblings()
    .removeClass('active');
}

$('.toggle-btn').click(() => {
  $('.header').toggleClass('show-nav');
});
