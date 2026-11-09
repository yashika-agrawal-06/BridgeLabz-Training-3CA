async function fetchAndDisplayProducts() {
    try {
        console.log("Fetching products...");
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        
        products.slice(0, 3).forEach(product => { // Limiting to 3 for clean console output
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("-------------------------");
        });

    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

fetchAndDisplayProducts();
