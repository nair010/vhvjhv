var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "ABOUT ROTARCT CLUB",
  "ABOUT RCPU",
  "OUR MISSION",
  "OUR VISION",
  
];
var slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

