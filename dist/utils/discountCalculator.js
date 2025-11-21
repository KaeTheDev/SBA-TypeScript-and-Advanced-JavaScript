export default function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}
