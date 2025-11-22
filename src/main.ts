import Product from "./models/Product.js";
import { fetchProductData, type APIProduct } from "./services/apiService.js";

async function processProducts() {
    const productData = await fetchProductData(); // returning a promise
  
    const productInstances: Product[] = productData.products.map(
      (p: APIProduct) =>
        new Product(
          p.id,
          p.title,
          p.description,
          p.category,
          p.price,
          p.discountPercentage
        )
    );
  
    productInstances.forEach((prod: Product) => {
        // looping through the products and calling the displayDetails and getPriceWithDiscount
      console.log(prod.displayDetails());
      console.log(prod.getPriceWithDiscount());
    });
  }
  
  processProducts();