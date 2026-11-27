$(document).ready(function () {
  const API_URL = "http://localhost:3001/products";
  let debounceTimer;

  function fetchProducts(query = "") {
    $("#loader").show();

    // Send GET request with ?q=value query parameter
    $.ajax({
      url: API_URL,
      method: "GET",
      data: { q: query },
      success: function (products) {
        $("#loader").hide();
        const $container = $("#results-container");
        $container.empty();

        // Display fallback message if response is empty
        if (!products || products.length === 0) {
          $container.html("<p>No products found.</p>");
          return;
        }

        // Render product image, name, and price
        products.forEach(function (item) {
          const cardHtml = `
            <article class="card">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p><strong>$${Number(item.price).toFixed(2)}</strong></p>
            </article>
          `;
          $container.append(cardHtml);
        });
      },
      error: function () {
        $("#loader").hide();
        $("#results-container").html("<p style='color:red;'>Error fetching products. Make sure JSON Server is running on port 3001.</p>");
      }
    });
  }

  // Initial load of all products
  fetchProducts();

  // Trigger search dynamically as user types (with 250ms debounce)
  $("#search-box").on("keyup", function () {
    clearTimeout(debounceTimer);
    const searchTerm = $(this).val().trim();
    debounceTimer = setTimeout(() => {
      fetchProducts(searchTerm);
    }, 250);
  });
});
