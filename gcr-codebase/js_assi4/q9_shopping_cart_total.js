"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  // Add an item to the cart
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
    console.log(`Added: ${quantity}x ${name} @ $${price}`);
  }

  // Calculate base total
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Apply coupon and calculate final total
  checkout(couponCode) {
    let total = this.getTotal();
    console.log(`\nBase Total: $${total}`);

    // Validate coupon: SAVE20 or DISC10 (captures the numeric discount value)
    const couponRegEx = /^(SAVE|DISC)(\d{2})$/;
    const match = couponCode.match(couponRegEx);

    if (match) {
      const discountPercent = parseInt(match[2], 10); // Extract '20' or '10'
      const discountAmount = (total * discountPercent) / 100;
      total -= discountAmount;
      console.log(`Coupon Applied! ${discountPercent}% off (-$${discountAmount})`);
    } else if (couponCode) {
      console.log(`Invalid coupon: ${couponCode}`);
    }

    console.log(`Final Total: $${total}`);
    return total;
  }
}

// Test the Shopping Cart
const myCart = new Cart();
myCart.addItem("Wireless Mouse", 25, 2);
myCart.addItem("Keyboard", 75, 1);
myCart.addItem("USB-C Hub", 40, 1);

// Test invalid coupon
myCart.checkout("HALFOFF50");

// Test valid coupon
myCart.checkout("SAVE20");
