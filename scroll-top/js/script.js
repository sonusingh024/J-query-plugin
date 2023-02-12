$(document).ready(function () {
  // variables
  var toTop = $('.scroll-top')
  // logic
  toTop.on('click', function () {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    })
  })
})
