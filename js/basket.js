// Task 5.	Implementing basket or wishlist logic using HTML, CSS, and JavaScript

const basketContainer = document.getElementById("basketItems");
const basketData = JSON.parse(localStorage.getItem("basket")) || [];
let total = 0;

if (basketData.length === 0) {
  basketContainer.innerHTML =
    '<p style="text-align:center; font-size:1.2rem;">Your basket is empty 😢</p>';
} else {
  basketData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="/assets/product3.jpeg" alt="${item.product}">
      <h3>${item.product}</h3>
      <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
    `;
    basketContainer.appendChild(card);
    total += item.price;
  });
  document.getElementById("totalPrice").innerText = `Total: $${total.toFixed(
    2
  )}`;
}

function checkout() {
  if (basketData.length === 0) {
    alert("Your basket is empty!");
  } else {
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    localStorage.removeItem("basket");
    location.reload();
  }
}
