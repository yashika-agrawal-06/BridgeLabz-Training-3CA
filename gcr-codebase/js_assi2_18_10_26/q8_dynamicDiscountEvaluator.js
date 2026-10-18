const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const cartTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    discountedSubtotal += product.price * (1 - discountRate);
}

const finalTotal = cartTotal > 50000 ? discountedSubtotal * 0.95 : discountedSubtotal;

console.log(`Original cart total: $${cartTotal.toFixed(2)}`);
console.log(`Final total: $${finalTotal.toFixed(2)}`);
