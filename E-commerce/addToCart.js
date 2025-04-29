export const addToCart = (event, id, stock) => {
  const currentElement = document.querySelector(`#card${id}`);
  console.log(currentElement);

  let value1 = currentElement.querySelector("#countZero").innerText;
  let value2 = currentElement.querySelector(".price").innerText;
  // console.log(value1, value2);
  //we can want only image, price and name inside the cart
};
