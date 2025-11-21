import Product from "../models/Product.js";

function calculateTax(product: Product): number {
  let taxPercentage = 4.75 / 100;

  if (product.category.toLowerCase() === "groceries") {
    taxPercentage = 3 / 100;
  }
  return taxPercentage * product.price;
}
