const logoContainer = document.querySelector('.flybee-logo-container');
const logo = document.querySelector('.flybee-logo');
const squaresContainer = document.querySelector('.squares-container');
const destinationContainer = document.querySelector('.destination-container');
const country = document.querySelector('.country');
const city = document.querySelector('.city');
const bookingContainer = document.querySelector('.booking-container');
const priceContainer = document.querySelector('.price-container');

logoContainer.classList.add('animate__animated', 'animate__fadeInUpBig');
logo.classList.add('animate__animated', 'animate__fadeInLeftBig');

logoContainer.addEventListener('animationend', () => {
    logoContainer.classList.add('animate__animated', 'animate__fadeOutUp', 'animate__delay-1s');
});

logoContainer.addEventListener('animationend', () => {
    logo.classList.add('move-position');
});

setTimeout(() => {
    squaresContainer.classList.add('animate__animated', 'animate__fadeInUpBig');
    squaresContainer.style.display = 'flex';
}, 2000);

setTimeout(() => {
    country.classList.add('animate__animated', 'animate__fadeInUpBig');
    city.classList.add('animate__animated', 'animate__fadeInUpBig');
    bookingContainer.classList.add('animate__animated', 'animate__fadeInUpBig');
    priceContainer.classList.add('animate__animated', 'animate__fadeInUpBig');
    priceContainer.style.display = 'grid';
    destinationContainer.style.display = 'grid';
    bookingContainer.style.display = 'flex';
}, 3000);