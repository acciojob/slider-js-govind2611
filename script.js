//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Variables
  var currentSlide = 1;
  var totalSlides = 4;
  var sliderImage = document.getElementById("slider-image");

  // Set initial image
  updateImage(currentSlide);

  // Button click event handlers
  document.querySelector(".up-button").addEventListener("click", function () {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    updateImage(currentSlide);
  });

  document.querySelector(".down-button").addEventListener("click", function () {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    updateImage(currentSlide);
  });

  // Function to update the image based on the current slide
  function updateImage(slide) {
    // Update image source
    sliderImage.src = "path/to/your/images/slide-" + slide + ".jpg";

    // Hide all slides
    var slides = document.getElementsByClassName("left-slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Show current slide
    var currentSlideElement = document.getElementById("slide-" + slide);
    currentSlideElement.style.display = "block";
  }
});
