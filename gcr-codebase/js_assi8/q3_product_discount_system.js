function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount percentage must be between 0 and 100.");
  }
  const discountAmount = (this.price * discountPercent) / 100;
  return Number((this.price - discountAmount).toFixed(2));
};

const laptop = new Product("Wireless Mouse", 1500);
const headphones = new Product("Noise-Cancelling Headphones", 8000);
const keyboard = new Product("Mechanical Keyboard", 4500);

console.log(`${laptop.name}: ₹${laptop.applyDiscount(10)} (10% off)`);
console.log(`${headphones.name}: ₹${headphones.applyDiscount(25)} (25% off)`);
console.log(`${keyboard.name}: ₹${keyboard.applyDiscount(15)} (15% off)`);
