// Basket helpers
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Add to basket
function addToBasket(product, price) {
  basket.push({ product, price });
  localStorage.setItem("basket", JSON.stringify(basket));
  alert(`${product} added to basket`);
}

// Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3500);
