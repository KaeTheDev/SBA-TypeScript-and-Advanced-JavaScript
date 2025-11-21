import Product from "./models/Product.js";
const gloss = new Product(4, "Red Lipstick", "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish", "beauty", 12.99, 12.16);
const food = new Product(16, "Apple", "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.", "groceries", 1.99, 12.62);
const products = [gloss, food];
console.log(gloss.displayDetails());
console.log(gloss.getPriceWithDiscount());
console.log(food.displayDetails());
console.log(food.getPriceWithDiscount());
