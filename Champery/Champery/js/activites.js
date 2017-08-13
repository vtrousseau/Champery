$(".labyrinthe").hover(function () {
$("#labyrinthe").toggleClass('white');
});

$(".foundation").hover(function () {
$("#foundation").toggleClass('white');
});

$(".abbaye").hover(function () {
$("#abbaye").toggleClass('white');
});

$(".grotte").hover(function () {
$("#grotte").toggleClass('white');
});

$(".baths").hover(function () {
$("#baths").toggleClass('white');
});

$(".saline").hover(function () {
$("#saline").toggleClass('white');
});

$(".aigle").hover(function () {
$("#aigle").toggleClass('white');
});

$(".swissvapeurparc").hover(function () {
$("#swissvapeurparc").toggleClass('white');
});

$(".aquaparc").hover(function () {
$("#aquaparc").toggleClass('white');
});

$(".chillon").hover(function () {
$("#chillon").toggleClass('white');
});


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var footer = $("#footer");

footer.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
  $(".map").fadeOut();} 
	else {
	$(".map").fadeIn();
	} 
});

win.scroll(function(event) {
  
 footer.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
  $(".map").fadeOut();} 
	else {
	$(".map").fadeIn();
	} 
    }) 
  });
 