export default function calculateTax(product) {
    let taxPercentage = 4.75 / 100;
    if (product.category.toLowerCase() === "groceries") {
        taxPercentage = 3 / 100;
    }
    return taxPercentage * product.price;
}
