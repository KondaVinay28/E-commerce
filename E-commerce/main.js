// Import the products from api/products.js
import products from './api/products.js';

document.addEventListener('DOMContentLoaded', () => {
    // Create a quantity map for independent product counters
    const quantityMap = {};
    
    // Initialize all products with 0 quantity
    products.forEach(product => {
        quantityMap[product.id] = 0;
    });
    
    // Get or create a parent container for all product cards
    let productContainer = document.getElementById('product-container');
    if (!productContainer) {
        productContainer = document.createElement('div');
        productContainer.id = 'product-container';
        document.body.appendChild(productContainer);
    }
    
    // Generate product cards dynamically
    generateProductCards(products, productContainer);
    
    // Set up event delegation for both increment and decrement buttons
    productContainer.addEventListener('click', (event) => {
        // Check if an increment button was clicked
        if (event.target.classList.contains('increment-btn')) {
            const productId = parseInt(event.target.dataset.productId);
            handleIncrement(productId, quantityMap);
        }
        // Check if a decrement button was clicked 
        else if (event.target.classList.contains('decrement-btn')) {
            const productId = parseInt(event.target.dataset.productId);
            handleDecrement(productId, quantityMap);
        }
    });
});

/**
 * Generate product cards dynamically with unique IDs
 * @param {Array} products - Array of product objects
 * @param {HTMLElement} container - Container element for product cards
 */
function generateProductCards(products, container) {
    products.forEach(product => {
        // Create a product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.id = `product-${product.id}`;
        
        // Add product information to the card
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            <div class="quantity-controls">
                <button class="decrement-btn" data-product-id="${product.id}">-</button>
                <span id="quantity-${product.id}" class="quantity-display">0</span>
                <button class="increment-btn" data-product-id="${product.id}">+</button>
            </div>
        `;
        
        // Add the card to the container
        container.appendChild(productCard);
    });
}

/**
 * Handle increment button click
 * @param {number} productId - ID of the product
 * @param {Object} quantityMap - Map of product quantities
 */
function handleIncrement(productId, quantityMap) {
    // Increment the quantity
    quantityMap[productId]++;
    
    // Update the display
    updateQuantityDisplay(productId, quantityMap[productId]);
    
    // Add logic to update cart or API call here
    console.log(`Updated product ${productId} quantity to ${quantityMap[productId]}`);
}

/**
 * Handle decrement button click
 * @param {number} productId - ID of the product
 * @param {Object} quantityMap - Map of product quantities
 */
function handleDecrement(productId, quantityMap) {
    // Prevent negative quantities
    if (quantityMap[productId] > 0) {
        // Decrement the quantity
        quantityMap[productId]--;
        
        // Update the display
        updateQuantityDisplay(productId, quantityMap[productId]);
        
        // Add logic to update cart or API call here
        console.log(`Updated product ${productId} quantity to ${quantityMap[productId]}`);
    }
}

/**
 * Update the quantity display for a product
 * @param {number} productId - ID of the product
 * @param {number} quantity - New quantity value
 */
function updateQuantityDisplay(productId, quantity) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = quantity;
    }
}
