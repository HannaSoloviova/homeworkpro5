const categories = [
  { name: 'Laptops', key: 'laptops' },
  { name: 'Phones', key: 'phones' }
];

const products = {
  laptops: [
    { name: 'Apple Macbook', price: 2000 },
    { name: 'Dell XPS15', price: 2100 },
  ],
  phones: [
    { name: 'iPhone X', price: 1500 },
    { name: 'Samsung S10', price: 1600 },
    { name: 'Samsung S20', price: 2500 },
  ],
};

const DISCOUNT = 0.2;
const DISCOUNT_FROM = 10000;

function showCategories() {
	for (let i = 0; i < categories.length; i++) {
	  console.log('#' + (i + 1) + ' ' + categories[i].name);
	}
}

function getCategoryFromUser() {
	let a;
		do {
		  a = parseInt(prompt('Enter the category'));
		} while(a < 1 || a > categories.length);
	return a;
}

function showProductsByCategory(category) {
	for (let i = 0; i < category.length; i++) {
	  console.log('#' + (i + 1) + ' Name: ' + category[i].name + ' Price: $' + category[i].price);
	}
}

function getKeyFromCategory(a) {
	return categories[a - 1].key;
}

function getProductArrByKey(a) {
 	return products[selectedKey];
}

function getProductNumberFromUser() {
	let a;
		do {
		  a = parseInt(prompt('Enter the number of the product which you want to buy'));
		} while(isNaN(a) || a <= 0 || a > selectedProductsArr.length);
	return a;
}

function showSelectedProduct(a) {
	let selectedProduct;
	selectedProduct = selectedProductsArr[a - 1];
	console.log('You chose this product', selectedProduct);
	return selectedProduct;
}

function getAmountFromUser() {
	let amount;	
		do {
		  amount = parseInt(prompt('Enter the amount of product which you wanna buy'));
		} while (isNaN(amount) || amount <= 0);
	return amount;
}

function showAmount(amount) {
	console.log('You buy ' + amount + ' items');
}

function calcPrice(amount,price) {
	return productAmount * selectedProduct.price;
}

function printPrice(a) {
	console.log('result Price $' + a);

	if (resultPrice > DISCOUNT_FROM) {
		 const finalPrice = a * (1 - DISCOUNT);

		 console.log('You got the discount ' + (DISCOUNT * 100) + '%');
		 console.log('The final price is $' + finalPrice);
	}
		
}