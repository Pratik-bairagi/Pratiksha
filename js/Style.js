let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart");
}

function sendWhatsApp() {
  let phone = "91XXXXXXXXXX";
  let msg = "I want to order: " + cart.join(", ");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
