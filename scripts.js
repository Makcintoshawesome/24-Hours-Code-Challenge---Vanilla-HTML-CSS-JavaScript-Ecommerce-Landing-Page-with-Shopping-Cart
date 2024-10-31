// Initialize cart as a global variable
let cart = [];

// Modified addToCart function
function addToCart(button) {
    const productContainer = button.closest('.col-md-2');
    if (!productContainer) return;

    const product = {
        id: productContainer.getAttribute('data-id') || Date.now().toString(),
        name: productContainer.querySelector('.product-name').textContent,
        price: parseFloat(productContainer.querySelector('.product-price').textContent.replace('$', '')),
        image: productContainer.querySelector('img').src,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        alert("Product already in cart!");
        return;
    }

    cart.push(product);
    updateCartCount();
    updateCartDropdown();
    saveCartToLocalStorage();
    alert(`${product.name} has been added to the cart!`);
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartItemCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Update cart dropdown
function updateCartDropdown() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'dropdown-item d-flex align-items-center gap-2 py-2';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="flex-grow-1">
                <p class="mb-0" style="font-size: 0.9rem;">${item.name}</p>
                <span class="text-muted" style="font-size: 0.8rem;">$${item.price.toFixed(2)}</span>
            </div>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.id}')">×</button>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    updateCartDropdown();
    saveCartToLocalStorage();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateCartDropdown();
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();

    // Add click event listeners to all buy buttons
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            addToCart(button);
        });
    });
});