import calculateTax from "../utils/taxCalculator.js";
import calculateDiscount from "../utils/discountCalculator.js";

export default class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;

        constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
            this.price = price;
            this.discountPercentage = discountPercentage;
        }

        displayDetails(): string {
            return `The ${this.title} has an ID of ${this.id}. It's in the category of ${this.category} and can be described as: ${this.description}. 
            It costs $${this.price}. And it has a discount percentage of ${this.discountPercentage}.`;
        }

        getPriceWithDiscount(): string {
            const discountAmount = calculateDiscount(this); // returns $ amount discounted
            const discountedPrice = this.price - discountAmount;
        
            const taxAmount = calculateTax(this); // returns $ amount taxed
            const finalPrice = discountedPrice + taxAmount;
        
            return `$${finalPrice.toFixed(2)}`;
          }
}