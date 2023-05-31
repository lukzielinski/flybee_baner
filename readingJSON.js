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

  const wrapper = document.querySelector(".wrapper");
  wrapper.style.backgroundImage = `url(${imgURL})`;
  wrapper.style.backgroundSize = "cover";
  wrapper.style.animation = "scaleBackground 6s infinite";
  wrapper.style.animationFillMode = "forwards";
  const countryElement = banerContainer.querySelector(".country");
  const cityElement = banerContainer.querySelector(".city");
  console.log(cityElement.style.width)
  const textElement = banerContainer.querySelector(".text");
  const priceElement = banerContainer.querySelector(".price");

  countryElement.innerText = country;
  cityElement.innerText = city;
  textElement.innerText = priceText;
  priceElement.innerText = `${price} ${currency}`;
}

fetchOffersAndDisplay();
