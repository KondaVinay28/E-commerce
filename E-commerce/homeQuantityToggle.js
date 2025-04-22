export const homeQuantityToggle = (event, id, stock) => {
  let currentCard = document.querySelector(`#card${id}`);
  // console.log(currentCard);
  let cardQuantity = currentCard.querySelector("#countZero");
  // console.log(cardQuantity);
  let quantity = parseInt(cardQuantity.innerText) || 0;
  // console.log(quantity);
  // console.log(stock);

  if (event.target.className == "incButton") {
    if (quantity < stock) {
      quantity += 1;
    }
  } else if (event.target.className == "decButton") {
    if (quantity > 0) {
      quantity -= 1;
    } else {
      return;
    }
  }
  cardQuantity.innerText = quantity;
  cardQuantity.setAttribute("countZero", quantity.toString());
  return quantity;
};
//stock should reduce on every increment and should decrease on every decrement wrt card

//Add to cart functionality
