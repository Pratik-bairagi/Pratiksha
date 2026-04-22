let cart = [];

function addToCart(product) {
  localStorage.setItem("cartItem", product);
  window.location.href = "cart.html";
}

function sendWhatsApp() {
  let phone = "91XXXXXXXXXX";
  let msg = "I want to order: " + cart.join(", ");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
