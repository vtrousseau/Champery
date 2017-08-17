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


var scrollEventHandler = function() {
	if($(window).width() >= 992){
  // do your stuff
	if(isScrolledIntoView(document.getElementsByClassName('map-fade')[0])) {
  	$('.map').fadeOut();
  } else {
  	$('.map').fadeIn();
  }  
	}
}

function unbindScrollEventHandler() {
	$(document).unbind('scroll', scrollEventHandler);
}

$(document).scroll(scrollEventHandler);

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}
