import products from "../api/products.js";
document.addEventListener("DOMContentLoaded", () => {
  let productsContainer = document.querySelector(".products_container");
  let innerHTML = "";
  products.forEach((element) => {
    innerHTML += `
        
    <div class="product-card">
      <div class="card">
        <div class="category">
          <button id="item-name">${element.category}</button>
        </div>

        <div class="card-image">
          <img src="${element.image}" alt="${element.name}" />
        </div>

        <div class="card-specifications">
          <h2>${element.name}</h2>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <p>${element.description}</p>
          <span class="spans">$${element.price}</span>
          <span class="strike spans">$${(element.price * 2).toFixed(2)}</span>

          <div class="card-quantity">
            <p>Total Stocks Available :</p>
            <p>${element.stock}</p>
          </div>

          <div class="card-stock spans">
            <span>Quantity(Pieces)</span>
            <button onclick="random()" class="incButton">+</button>
            <span id="countZero">0</span>
            <button class="decButton">-</button>
          </div>

          <button  class="spans AddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
        `;
    productsContainer.innerHTML = innerHTML;
  });
});
