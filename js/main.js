$(function(){  // On page load

$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-sroll").addClass("header-small")
    } else {
        $("#header-sroll").removeClass("header-small")
    }
});

  $("#Carousel").owlCarousel({
    //navigation : true,  Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    responsive:true
  });

$('.main-menu a,#mobile-menu a,.footer-menu a, .side-menu a').click(function(event) {
var page = window.location.pathname;
if( page == '/' || page == '/index.html'){
    event.preventDefault();
}
    var link = this;
    $.smoothScroll({
      scrollTarget: link.hash
    });
    window.location.hash
    window.history.pushState("string", "Title",window.location.pathname+ window.location.search+link.hash);
    //console.log(window.location.pathname+ window.location.search+link.hash);
});

$('#mobile-menu').slicknav({
    prependTo:'.mobile-menu-wrapper',
    brand: '<img src="img/logo.png" height="34">',
    closeOnClick: true
});

});

