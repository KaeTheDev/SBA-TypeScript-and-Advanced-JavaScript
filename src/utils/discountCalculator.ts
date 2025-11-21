import type Product from "../models/Product.js";

function calculateDiscount(product: Product): number {
    return product.price * (product.discountPercentage / 100);
}