const sliderInterval = 6000;
let currentSlide = 0;

const logoContainer = document.querySelector(".flybee-logo-container");
const logo = document.querySelector(".flybee-logo");
const squaresContainer = document.querySelector(".squares-container");
const destinationContainer = document.querySelector(".destination-container");
const country = document.querySelector(".country");
const city = document.querySelector(".city");
const bookingContainer = document.querySelector(".booking-container");
const priceContainer = document.querySelector(".price-container");
const line = document.querySelector(".chevron-line");

logoContainer.classList.add("animate__animated", "animate__fadeInUpBig");
logo.classList.add("animate__animated", "animate__fadeInLeftBig");

logoContainer.addEventListener("animationend", () => {
  logoContainer.classList.add(
    "animate__animated",
    "animate__fadeOutUp",
    "animate__delay-1s"
  );
});

logoContainer.addEventListener("animationend", () => {
  logo.classList.add("move-position");
});

setTimeout(() => {
  squaresContainer.classList.add("animate__animated", "animate__fadeInUpBig");
  squaresContainer.style.display = "flex";
}, 2000);

setInterval(() => {
  country.classList.add("animate__animated", "animate__fadeInUpBig");
  city.classList.add("animate__animated", "animate__fadeInUpBig");
  bookingContainer.classList.add("animate__animated", "animate__fadeInRight");
  priceContainer.classList.add("animate__animated", "animate__fadeInUpBig");
  line.classList.add("animate__animated", "animate__fadeInLeft");
  line.style.display = "block";
  priceContainer.style.display = "grid";
  destinationContainer.style.display = "grid";
  bookingContainer.style.display = "flex";
}, 3000);

setInterval(showNextSlide, sliderInterval);

function showNextSlide() {
  const slides = document.querySelectorAll(".square");

  slides[currentSlide].classList.remove("active-square");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active-square");
}
