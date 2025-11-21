import Product from "../models/Product.js";

function calculateDiscount(product: Product): string {
    return product.getPriceWithDiscount();
}