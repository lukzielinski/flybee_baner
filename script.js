const logoContainer = document.querySelector('.flybee-logo-container');
const logo = document.querySelector('.flybee-logo');
const squaresContainer = document.querySelector('.squares-container');
const destinationContainer = document.querySelector('.destination-container');
const country = document.querySelector('.country');

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
    country.classList.add('country-active');
    destinationContainer.style.display = 'grid';
}, 3000);