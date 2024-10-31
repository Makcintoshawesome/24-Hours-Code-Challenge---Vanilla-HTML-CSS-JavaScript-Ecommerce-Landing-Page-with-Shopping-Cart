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
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItemCount) {
        cartItemCount.textContent = cart.length;
    }
    
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="dropdown-item d-flex justify-content-between align-items-center">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">×</button>
                </div>
            `;
        });
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
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