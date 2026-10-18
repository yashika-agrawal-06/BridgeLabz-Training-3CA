const productName = " wireless headphones PRO ";
const lowercaseName = productName.trim().toLowerCase();
const titleCaseName = lowercaseName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const formattedName = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Product title: ${formattedName}`);
console.log(`Title length: ${formattedName.length}`);
