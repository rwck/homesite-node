/*******************************
    Mobile Menu Toggle
  *******************************/
$("#toggle-menu").click(function() {
  $(this).toggleClass("menu-is-active");
  $(".mobile-menu").slideToggle();
});


/*******************************
  Hide the Mobile Menu if resized
*******************************/
$(window).on("resize", function() {
  if (window.innerWidth >= 640) {
    $("#toggle-menu").removeClass("menu-is-active");
    $(".mobile-menu").slideUp();
  }
});


/*******************************
  Auto Scrolling the Menu
*******************************/
$("a").on("click", function() {

  // check if it has a hash
  if (this.hash) {

    // get rid of the # sign
    var hash = this.hash.substr(1);

    // get the position of the <a name>
    var $toElement = $("a[name=" + hash + "]");
    var toPosition = $toElement.position().top - 59;

    // scroll/animate to that element
    $("html,body").animate({
      scrollTop: toPosition
    }, 1000);

    // don't do the jump
    return false;
  }
});

// If page is loaded with a hash
if (location.hash) {
  var hash = location.hash;
  window.scroll(0, 0);
  $("a[href=" + hash + "]").click();
}
