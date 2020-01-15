window.onload = function() {

  let activeSlide = 1;

  document.getElementById("button-back").addEventListener("click", prevSlide);
  document.getElementById("button-fwd").addEventListener("click", nextSlide);

  function showSlides(n) {
    let i;
    let currentSlideCount = n;
    let slides = document.getElementsByClassName("slide");
    if(n > slides.length) {
      activeSlide = 1;
      currentSlideCount = 1;
    }
    if(n < 1) {
      activeSlide = slides.length;
      currentSlideCount = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].classList.add("inactiveSlide");
    }
    let currentSlide = slides[currentSlideCount-1];
    currentSlide.classList.remove("inactiveSlide");
    currentSlide.classList.add("activeSlide");
  }

  showSlides(activeSlide);

  function nextSlide() {
    showSlides(activeSlide += 1);
  }

  function prevSlide() {
    showSlides(activeSlide += -1);
  }

  const interval = setInterval(function() {
   nextSlide();
 }, 5000);
}
