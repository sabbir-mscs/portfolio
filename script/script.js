//Collapse hide fix for menu
$(".port-item").click(function() {
  $(".collapse").collapse("hide");
});

// Dynamic year for copyright section
$("#year").text(new Date().getFullYear());

//Ekko lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
  $(".modal-header").display = "inline-block";
});

//Loader Animation
/*    $(window).on("load", function() {
    $(".loader")
      .fadeIn(3000)
      .delay(3500)
      .fadeOut("slow");
  });
*/
//WOW Initialize
new WOW().init();
