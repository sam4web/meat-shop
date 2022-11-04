// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

// loads header and footer
$(document).ready(() => {
  console.log('ready');
  $('.header_wrapper').load('/components/header.html');
  $('.footer_wrapper').load('/components/footer.html');
});
