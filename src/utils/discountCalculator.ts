import Product from "../models/Product.js";

function calculateDiscount(product: Product): number {
    return product.getPriceWithDiscount();
}