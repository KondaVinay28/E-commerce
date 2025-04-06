//make addtocart button functional
//make increment and decrement btns functional
//display the cart items in cart
export function cartQuantity(event) {
  // let count = 0;
  let countNum = event.target.closest(".cartToggle");
  let res = countNum.querySelector("#countToggle");
  // console.log(countNum);
  // console.log(res);
  let count = parseInt(res.textContent) || 0;
  // console.log(count);
  if (event.target.classList.contains("incButton")) {
    // console.log("increase");
    count++;
    // res.textContent = count;
  } else if (event.target.classList.contains("decButton")) {
    // console.log("decrease");
    if (count > 0) {
      count--;
    }
  }
  res.textContent = count;
}
