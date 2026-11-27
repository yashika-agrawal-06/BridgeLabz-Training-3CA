$(document).ready(function () {
  // 4. Style discounted products using attribute selector
  $('.product-card[data-discount="true"]').css({
    "border-left": "5px solid #10b981"
  });

  // 1 & 5. Click product card to highlight background and check stock status
  $(".product-card").on("click", function () {
    $(this).toggleClass("highlighted");

    // Check data-stock attribute
    if ($(this).data("stock") === "out-of-stock") {
      const productName = $(this).find("h3").text();
      alert(`Notice: "${productName}" is currently out of stock!`);
    }
  });

  // 2. Hover over product to show/hide extra details
  $(".product-card").hover(
    function () {
      $(this).find(".extra-details").stop(true, true).slideDown(200);
    },
    function () {
      $(this).find(".extra-details").stop(true, true).slideUp(200);
    }
  );

  // 3. Click Favorite icon to toggle 'selected' class (stopPropagation prevents card click)
  $(".fav-btn").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });
});
