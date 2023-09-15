const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");
const nextBtn = document.querySelector("[data-carousel-btn='next']");
const prevBtn = document.querySelector("[data-carousel-btn='prev']");
let intervalId;

function nextSlide() {
  const activeSlide = slides.querySelector("[data-active]");
  const nextSlide = activeSlide.nextElementSibling || slides.firstElementChild;
  activeSlide.removeAttribute("data-active");
  nextSlide.setAttribute("data-active", "true");
}

function startCarousel() {
  intervalId = setInterval(nextSlide, 2000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopCarousel();
});

prevBtn.addEventListener("click", () => {
  const activeSlide = slides.querySelector("[data-active]");
  const prevSlide = activeSlide.previousElementSibling || slides.lastElementChild;
  activeSlide.removeAttribute("data-active");
  prevSlide.setAttribute("data-active", "true");
  stopCarousel();
});

startCarousel();
