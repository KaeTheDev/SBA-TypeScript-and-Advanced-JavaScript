import Product from "./models/Product.js";
import { fetchProductData } from "./services/apiService.js";
async function main() {
    const productData = await fetchProductData(); // returning a promise
    const productInstances = productData.products.map((p) => new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage));
    productInstances.forEach((prod) => {
        // looping through the products and calling the displayDetails and getPriceWithDiscount methods
        console.log(prod.displayDetails());
        console.log(prod.getPriceWithDiscount());
    });
}
main();
