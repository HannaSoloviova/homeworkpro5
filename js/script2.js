showCategories();

const categoryNumber=getCategoryFromUser();
let selectedKey = getKeyFromCategory(categoryNumber);

const selectedProductsArr = getProductArrByKey(selectedKey);

showProductsByCategory(selectedProductsArr);

let productNumber = getProductNumberFromUser();

let selectedProduct = showSelectedProduct(productNumber);

let productAmount = getAmountFromUser();
showAmount(productAmount);

const resultPrice = calcPrice(productAmount,selectedProduct.price);
printPrice(resultPrice);