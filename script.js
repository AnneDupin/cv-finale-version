$(document).ready(function(){
$(".burger").on("click", function(){
$("nav ul").toggleClass("menu");
});
});

$(window).on("scroll", function(){
if($(window).scrollTop()){
    $('nav').addClass('scroll');
}
else {
    $('nav').removeClass('scroll');
}
});


$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });


  // Portfolio
jQuery('#portfolio').mixItUp({  

  selectors: {
    target: '.tile',
    filter: '.filter',
    sort: '.sort-btn'
  },
  
      animation: {
      animateResizeContainer: false,
      effects: 'fade scale'
    }

});