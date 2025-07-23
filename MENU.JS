// CART DATA
let cart = [];

// Add to Cart Function
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

// Update Cart UI
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total');
  cartList.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.qty} - ₹${item.price * item.qty}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}

// Checkout Button Action
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let summary = "Order Summary:\n";
  cart.forEach(item => {
    summary += `${item.name} x${item.qty} = ₹${item.price * item.qty}\n`;
  });
  summary += document.getElementById('cart-total').textContent;

  alert(summary + "\n\nThank you for ordering with Green-Royale!");
  cart = [];
  updateCart();
}

// Card Flip on Click
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.dish-card');

  cards.forEach(card => {
    card.addEventListener('click', function (e) {
      // Prevent flipping when clicking 'Add to Cart' button
      if (e.target.tagName.toLowerCase() === 'button') return;

      this.classList.toggle('flipped');
    });
  });
});
document.getElementById('checkout-btn').addEventListener('click', function (e) {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add some items before checking out.');
    e.preventDefault(); // Stop redirection
  } else {
    window.location.href = 'payment.html'; // Redirect
  }
});


