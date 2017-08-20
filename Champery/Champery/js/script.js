$(document).ready(function() {
  $(document).on("scroll", onScroll);
  $(window).resize(function() {
    if ($(document).width() > 714)
      $(".responsive-menu").css("height", "0px");
		$(".responsive-menu").removeClass("menu-border");
  });

  var menu = $(".menu").html();
  $(".responsive-menu").append(menu);
  $(".responsive-menu ul").removeClass("main-menu");
  $(".responsive-menu ul").addClass("mobile-menu");
  $(".menu ul li:first-child").addClass("active");

  $(".mobile-menu-icon").click(function() {
	$(".responsive-menu").toggleClass("menu-border");
    var respMenu = $(".responsive-menu");
    var height = (respMenu.css("height") == "190px") ? "0px" : "190px";
    respMenu.animate({
      height: height
    }, 100);
  });

  $(".menu-button").click(function(event) {
        var href = $(this).attr('href');
	var nav = $('.content-nav');
if (nav.length) {
  var contentNav = nav.offset().top;
    var href = $(this).attr('href');
    scrollAmount = (href == "#titlepage") ? 0 : $(href).offset().top - 120;
    $('html, body').animate({
      scrollTop: scrollAmount
    }, 1000);
}
  });

  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $("#test").html(scrollPos);
    $('.menu li a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink).attr("href");
      if ($(refElement).position().top - 190 <= scrollPos && $(refElement).position().top - 190 + $(refElement).height() >= scrollPos) {
        currLink.parent().addClass("active");

      } else {
        currLink.parent().removeClass("active");
      }
    });
  }

});
