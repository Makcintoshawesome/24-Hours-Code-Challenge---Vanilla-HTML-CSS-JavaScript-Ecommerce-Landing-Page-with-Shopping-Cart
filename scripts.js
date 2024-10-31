// Initialize cart array in localStorage if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(name, price) {
    const item = {
        id: Date.now(), // unique ID for each item
        name: name,
        price: price,
        quantity: 1
    };
    
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Show confirmation message
    alert(`${name} has been added to your cart!`);
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const shippingCost = document.getElementById('shippingCost');
    const taxAmount = document.getElementById('taxAmount');
    
    if (cartItemCount) {
        cartItemCount.textContent = cart.length;
    }
    
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                                <p class="card-text">
                                    <small class="text-muted">Quantity: ${item.quantity}</small>
                                </p>
                                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
    const tax = subtotal * 0.1; // Example tax rate (10%)
    const total = subtotal + shipping + tax;
    
    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingCost) shippingCost.textContent = `$${shipping.toFixed(2)}`;
    if (taxAmount) taxAmount.textContent = `$${tax.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to empty cart
function emptyCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Initialize cart display when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});