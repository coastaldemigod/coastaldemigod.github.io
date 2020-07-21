$(document).ready(function(){

    var checkScrollBar = function(){
      $('nav').css({
        backgroundColor: $(this).scrollTop() > 1 ?
          'rgb(255, 255, 255) ' : 'transparent'
      })
    }
    $(window).on('load resize scroll', checkScrollBar)
    });
 
    