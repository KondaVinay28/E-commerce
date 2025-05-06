export const getCardProducts = () => {
  let cartProducts = localStorage.getItem("cardProductsLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  return cartProducts;
};
