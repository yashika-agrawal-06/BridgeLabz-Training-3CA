const menuCatalog = [
  { itemName: "Margherita Pizza", price: 299 },
  { itemName: "Paneer Tikka Burger", price: 149 },
  { itemName: "Garlic Bread", price: 99 },
  { itemName: "Cold Coffee", price: 119 }
];

function calculateBill(orderItems) {
  try {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      throw new Error("Order list cannot be empty.");
    }

    const itemPrices = orderItems.map((orderedItem) => {
      const menuItem = menuCatalog.find(
        (item) => item.itemName.toLowerCase() === orderedItem.toLowerCase()
      );

      if (!menuItem) {
        throw new Error(`Invalid item ordered: "${orderedItem}" is not on the menu.`);
      }

      return menuItem.price;
    });

    const totalBillAmount = itemPrices.reduce((sum, price) => sum + price, 0);
    console.log(`Order Items: [${orderItems.join(", ")}] -> Total Bill: ₹${totalBillAmount}`);
    return totalBillAmount;
  } catch (error) {
    console.error(`Order Failed: ${error.message}`);
  }
}

calculateBill(["Margherita Pizza", "Cold Coffee"]);
calculateBill(["Margherita Pizza", "Sushi Roll"]);
