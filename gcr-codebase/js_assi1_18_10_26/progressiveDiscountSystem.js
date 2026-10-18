/**
 * Q6. Progressive Discount System
 * Logic: Applies multi-tiered percentage discounts based on total purchase amount and rounds final values.
 */

const purchaseTotal = 7450;
let discountPercent = 0;

// Progressive tier evaluation
if (purchaseTotal >= 10000) {
    discountPercent = 25;
} else if (purchaseTotal >= 5000) {
    discountPercent = 15;
} else if (purchaseTotal >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Price calculations
const discountAmount = (purchaseTotal * discountPercent) / 100;
const finalPrice = purchaseTotal - discountAmount;

// Output rounded values using Math.round()
console.log(`Original Total: $${Math.round(purchaseTotal)}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price: $${Math.round(finalPrice)}`);
