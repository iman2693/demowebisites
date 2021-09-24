$(".parallax-container").mousemove(function(e) {
  parallaxIt(e, ".slide1", -300);
  parallaxIt(e, ".slide2", -180);
  parallaxIt(e, ".slide3", -230);
  parallaxIt(e, ".slide4", -130);
  parallaxIt(e, ".slide5", -330);
});

function parallaxIt(e, target, movement) {
  var $this = $(".parallax-container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
