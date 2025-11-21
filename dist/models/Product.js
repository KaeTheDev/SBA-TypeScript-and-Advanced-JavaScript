import calculateTax from "../utils/taxCalculator.js";
import calculateDiscount from "../utils/discountCalculator.js";
export default class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `The ${this.title} has an ID of ${this.id}. It's in the category of ${this.category} and can be described as: ${this.description}. 
            It costs $${this.price}. And it has a discount percentage of ${this.discountPercentage}.`;
    }
    getPriceWithDiscount() {
        const discountAmount = calculateDiscount(this); // returns $ amount discounted
        const discountedPrice = this.price - discountAmount;
        const taxAmount = calculateTax(this); // returns $ amount taxed
        const finalPrice = discountedPrice + taxAmount;
        return `Final Price with Discount: $${finalPrice.toFixed(2)}`;
    }
}
