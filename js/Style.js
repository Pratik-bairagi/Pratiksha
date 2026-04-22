let cart = [];

function addToCart(product) {
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  alert(product + " added to cart");
}

function placeOrder(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  alert("Thank you " + name + " 🌿 Your order placed!");
  cart = [];
  document.getElementById("cart-count").innerText = 0;
}

function sendWhatsApp() {
  let phone = "91XXXXXXXXXX";
  let msg = "I want to order: " + cart.join(", ");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
