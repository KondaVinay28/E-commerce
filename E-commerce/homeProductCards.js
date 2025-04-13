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

    productClone.querySelector("#item-name").textContent = category;
    productClone.querySelector(".item").textContent = name;
    productClone.querySelector(".description").textContent = description;
    productClone.querySelector(".stock").textContent = stock;
    productClone.querySelector(".images").src = image;
    productsContainer.append(productClone);
  });
};
