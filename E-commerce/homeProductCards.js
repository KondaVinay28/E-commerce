import { homeQuantityToggle } from "./homeQuantityToggle.js";
import { addToCart } from "./addToCart.js";

const productsContainer = document.querySelector(".products_container");
const templateContainer = document.querySelector(".template-container");

export const homeProductCards = (products) => {
  if (!products) {
    return;
  }
  products.forEach((currEle) => {
    const { id, name, brand, stock, description, price, category, image } =
      currEle;

    const productClone = document.importNode(templateContainer.content, true);

    productClone.querySelector("#cardNumber").setAttribute("id", `card${id}`);
    productClone.querySelector("#item-name").textContent = category;
    productClone.querySelector(".item").textContent = name;
    productClone.querySelector(".description").textContent = description;
    productClone.querySelector(".stock").textContent = stock;
    productClone.querySelector(".images").src = image;
    productClone.querySelector(".strike").textContent = `${
      price.toFixed(2) * 2
    }`;
    productClone.querySelector(".price").textContent = `${price}`;
    productClone
      .querySelector(".toggleButtons")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".AddToCart")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });
    productsContainer.append(productClone);
  });
};
