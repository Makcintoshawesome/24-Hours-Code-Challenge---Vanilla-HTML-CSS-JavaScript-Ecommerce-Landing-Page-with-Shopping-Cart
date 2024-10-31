document.addEventListener('DOMContentLoaded', () => {
    // Initialize an empty cart array
    let cart = [];

    // Add event listener to "Buy" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h2').innerText;
            const productPrice = parseFloat(productElement.querySelector('strong').innerText.replace('$', ''));
            
            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });

    // Add item to cart and update count
    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex > -1) {
            alert("Product already in the cart!");
            return;
        }
        
        cart.push(product);
        updateCartCount();
        alert(`${product.name} has been added to the cart!`);
    }

    // Update the cart count in the header
    function updateCartCount() {
        document.getElementById('cartCount').textContent = cart.length;
    }

    // Show cart contents (basic example)
    document.getElementById('cartButton').addEventListener('click', () => {
        alert(`Cart contents:\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}`);
    });

    // Function to render cart items on the shopping cart page
    function renderCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerText = `${item.name} - $${item.price}`;
            
            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Remove';
            removeBtn.onclick = () => removeFromCart(item.id);
            
            itemElement.appendChild(removeBtn);
            cartItemsContainer.appendChild(itemElement);
        });

        updateTotalPrice();
    }

    // Function to remove an item from the cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }

    // Function to update total price
    function updateTotalPrice() {
        const totalPriceContainer = document.querySelector('.total-price');
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        
        totalPriceContainer.innerText = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Initial render of the cart (if on the shopping cart page)
    if (document.querySelector('.cart-items')) {
        renderCart();
    }
});

const cartButton = document.getElementById('cartButton');
if (cartButton) {
    cartButton.addEventListener('click', () => {
        alert(`Cart contents:\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}`);
    });
}

