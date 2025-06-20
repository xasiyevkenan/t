// Task 5.	Implementing basket or wishlist logic using HTML, CSS, and JavaScript
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(product, price) {
  basket.push({ product, price });
  localStorage.setItem("basket", JSON.stringify(basket));
  alert(`${product} added to basket`);
}

// Task 2.	Adding a slider or images using HTML, CSS, and JavaScript
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

function registerUser(event) {
  event.preventDefault();
  alert("Registration successful!");
}
