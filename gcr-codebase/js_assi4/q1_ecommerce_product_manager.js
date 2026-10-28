"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Method to apply a discount percentage to the product's price
  applyDiscount(percent) {
    const discountAmount = (this.price * percent) / 100;
    this.price -= discountAmount;
    return this.price;
  }

  // Method to return formatted product details
  displayDetails() {
    return `[ID: ${this.id}] ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
  }
}

// Create multiple product objects
const products = [
  new Product(101, "Laptop", 1200, "Electronics"),
  new Product(102, "Smartphone", 800, "Electronics"),
  new Product(103, "Office Chair", 250, "Furniture"),
  new Product(104, "Gaming Monitor", 1050, "Electronics"),
  new Product(105, "Desk Lamp", 45, "Furniture")
];

// Apply a 10% discount to all products (optional step to test method)
products.forEach(product => product.applyDiscount(10));

// Filter products with price > 1000 and display them
console.log("--- Products over $1000 ---");
const premiumProducts = products.filter(product => product.price > 1000);

premiumProducts.forEach(product => {
  console.log(product.displayDetails());
});
