$(document).ready(function(){

    var checkScrollBar = function(){
      $('nav').css({
        backgroundColor: $(this).scrollTop() > 1 ?
          'rgb(255, 255, 255) ' : 'transparent'
      })
    }
    $(document).ready(function(){
      $("nav").hover(function(){
        $(this).css("background-color", "#fff");
        }, function(){
        $(this).css("background-color", "transparent");
      });
    });

      $(window).on('load resize scroll', checkScrollBar)
    });
    