var checkScrollBar = function(){
  if($(window).scrollTop()>1){
    $('nav').addClass('navbar-animation shadow-lg');
  }
  else {
    $('nav').removeClass('navbar-animation shadow-lg');
  }
};
// This gives the navbar an animation
$(document).ready(function(){
  $(window).on('load resize scroll', checkScrollBar)
    });

    // This collapses the navbar in responsive mode when clicked on one of the links
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });