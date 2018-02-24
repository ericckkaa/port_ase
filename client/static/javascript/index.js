// scrollUp
// function startedFromTheBottom()
// {
//     window.scrollTo(0, document.body.scrollHeight);
// }

(function ($) {
    $(document).ready(function(){
        // hide .navbar
        $(".navbar").hide();
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // distance user needs to scroll before fadeIn
                if ($(this).scrollTop() > 400) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        })
    });
}(jQuery));


$(function() {
  var $elements = $('.showMe.notShowing'); //contains all elements the class not being shown
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('showing')) // check if already showing
        return;
      seeMe($(this));
    });
  });
});

function seeMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notShowing').addClass('showing');
  }
}



