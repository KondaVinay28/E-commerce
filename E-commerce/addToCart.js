import { getCardProducts } from "./getCardProducts.js";
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCardProducts();
  const currentElement = document.querySelector(`#card${id}`);

  // console.log(currentElement);

  let quantity = currentElement.querySelector("#countZero").innerText;
  let price = currentElement.querySelector(".price").innerText;

  let updateCart = { id, quantity, price };
  // console.log(value1, value2);
  console.log(updateCart);

  //we can want only image, price and name inside the cart
};
