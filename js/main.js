// Entry point for main JS Code
$(document).ready(function () {

    //ripples.init(".btn");
    //appends the overlay to each button
    $(".btn").each( function(){
        $(this).append("<div class='ripple'></div>");
    });
    
    $(".btn").click(function(e){
      var $clicked = $(this);
      
      //gets the clicked coordinates
      var offset = $clicked.offset();
      var relativeX = (e.pageX - offset.left);
      var relativeY = (e.pageY - offset.top);
      var width = $clicked.width();
      
      
      var $ripple = $clicked.find('.ripple');
      
      //puts the ripple in the clicked coordinates without animation
      $ripple.addClass("notransition");
      $ripple.css({"top" : relativeY, "left": relativeX});
      $ripple[0].offsetHeight;
      $ripple.removeClass("notransition");
      
      //animates the button and the ripple
      $ripple.css({ "width": width * 2, "height": width*2, "margin-left": -width, "margin-top": -width });
      
      setTimeout(function(){
          //resets the overlay and button
          $ripple.addClass("notransition");
          $ripple.attr("style", "");
          $ripple[0].offsetHeight;
        $ripple.removeClass("notransition");
      }, 300 );
    });
});