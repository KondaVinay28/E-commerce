import products from "../api/products.js";
document.addEventListener("DOMContentLoaded", () => {
  let productsContainer = document.querySelector(".products_container");
  // let innerHTML = "";
  let displayData = products
    .map((element) => {
      const { category, image, name, description, price, stock } = element;
      return ` 
    <div class="product-card">
      <div class="card">
        <div class="category">
          <button id="item-name">${category}</button>
        </div>

        <div class="card-image">
          <img src="${image}" alt="${name}" />
        </div> 

        <div class="card-specifications">
          <h2>${name}</h2>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <p>${description}</p>
          <span class="spans">$${price}</span>
          <span class="strike spans">$${(price * 2).toFixed(2)}</span>

          <div class="card-quantity">
            <p>Total Stocks Available :</p>
            <p>${stock}</p>
          </div>

          <div class="card-stock spans">
            <span>Quantity(Pieces)</span>
            <button  class="incButton">+</button>
            <span id="countZero">0</span>
            <button class="decButton">-</button>
          </div>

          <button  class="spans AddToCart">Add to Cart</button>
        </div>
      </div>
    </div> `;
    })
    .join("");
  productsContainer.innerHTML = displayData;
});
