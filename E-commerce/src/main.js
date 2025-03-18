//script goes here
const productsContainer = document.querySelector(".products_container");

const createProductCard = (product) => {
  // Fix the image path to point to the correct directory
  const imagePath = product.image.replace("../images/", "public/Images/");
  
  return `
    <div class="product-card">
      <div class="card">
        <div class="category">
          <button>${product.category}</button>
        </div>

        <div class="card-image">
          <img src="${imagePath}" alt="${product.name}" />
        </div>

        <div class="card-specifications">
          <h2>${product.name}</h2>
          <span>*</span>
          <span>*</span>
          <span>*</span>
          <span>*</span>
          <span>*</span>
          <p>${product.description}</p>
          <span class="spans">$${product.price}</span>
          <span class="strike spans">$${(product.price * 2).toFixed(2)}</span>

          <div class="card-quantity">
            <p>Total Stocks Available :</p>
            <p>${product.stock}</p>
          </div>

          <div class="card-stock spans">
            <span>Quantity(Pieces)</span>
            <button>+</button>
            <span>0</span>
            <button>-</button>
          </div>

          <button class="spans">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
};

const getData = async () => {
  try {
    const result = await fetch("api/products.json");
    const products = await result.json();
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
  } catch (e) {
    console.log("Error accessing api request:", e);
    productsContainer.innerHTML = '<p>Error loading products</p>';
  }
};

getData();
