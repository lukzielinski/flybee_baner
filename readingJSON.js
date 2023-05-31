let currentOfferIndex = 0;
let timerId;

function fetchOffersAndDisplay() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const offers = data.offers;
      const banerContainer = document.querySelector(".baner-container");

      clearTimeout(timerId);

      displayOffer(offers[currentOfferIndex], banerContainer);

      currentOfferIndex = (currentOfferIndex + 1) % offers.length;

      timerId = setTimeout(fetchOffersAndDisplay, 6000);
    })
    .catch((err) => console.log(err, "error try running a local server"));
}

function displayOffer(offer, banerContainer) {
  const { city, country, price, currency, priceText, imgURL } = offer;

  const background = document.querySelector(".background-image");
  background.style.backgroundImage = `url(${imgURL})`;
  background.style.backgroundSize = "cover";
  background.style.animation = "scaleBackground 6s infinite";
  background.style.animationFillMode = "forwards";
  const countryElement = banerContainer.querySelector(".country");
  const cityElement = banerContainer.querySelector(".city");
  const textElement = banerContainer.querySelector(".text");
  const priceElement = banerContainer.querySelector(".price");

  countryElement.innerText = country;
  cityElement.innerText = city;
  textElement.innerText = priceText;
  priceElement.innerText = `${price} ${currency}`;
}

fetchOffersAndDisplay();
