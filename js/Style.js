let cart = [];

// ADD TO CART
function addToCart(product) {
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
}

// PLACE ORDER → GOOGLE SHEET
function placeOrder(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      products: cart.join(", ")
    })
  })
  .then(() => alert("Order Saved ✅"))
  .catch(() => alert("Error ❌"));

  cart = [];
  document.getElementById("cart-count").innerText = 0;
}

// WHATSAPP
function sendWhatsApp() {
  let phone = "91XXXXXXXXXX"; // apna number
  let msg = "Order: " + cart.join(", ");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

// PAYMENT
function payNow() {
  var options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: 50000,
    currency: "INR",
    name: "Pratiksha Herbals",
    description: "Order Payment",
    handler: function () {
      alert("Payment Successful ✅");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
