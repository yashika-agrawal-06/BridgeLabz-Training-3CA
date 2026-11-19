const productInventory = [
  { id: 101, name: "Smartphone", category: "Electronics", price: 25000, stock: 4 },
  { id: 102, name: "Running Shoes", category: "Footwear", price: 3500, stock: 18 },
  { id: 103, name: "Bluetooth Speaker", category: "Electronics", price: 2200, stock: 2 },
  { id: 104, name: "Cotton T-Shirt", category: "Apparel", price: 799, stock: 40 },
  { id: 105, name: "Denim Jeans", category: "Apparel", price: 1999, stock: 3 }
];

function getLowStockProducts(products, threshold = 5) {
  return products.filter((product) => product.stock < threshold);
}

function sortProductsByPrice(products, order = "asc") {
  return [...products].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
}

function calculateTotalInventoryValue(products) {
  return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(products) {
  return products.reduce((grouped, product) => {
    const { category } = product;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
    return grouped;
  }, {});
}

console.log("Low Stock Products:", getLowStockProducts(productInventory));
console.log("Sorted by Price (Asc):", sortProductsByPrice(productInventory));
console.log("Total Inventory Value: ₹" + calculateTotalInventoryValue(productInventory));
console.log("Grouped by Category:", groupByCategory(productInventory));
