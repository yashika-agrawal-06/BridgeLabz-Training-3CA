$(document).ready(function () {
  const $courses = $(".course-card");

  // 1. Filter courses in real-time using .keyup()
  $("#course-search").on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();
    let visibleCount = 0;

    $courses.each(function () {
      const originalTitle = $(this).data("title");
      const lowerTitle = originalTitle.toLowerCase();

      if (query === "") {
        // Reset text and show all if query is empty
        $(this).text(originalTitle).show();
        visibleCount++;
      } else if (lowerTitle.includes(query)) {
        // 2. Highlight matched text using .css() on a dynamically wrapped span
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
        const highlightedHtml = originalTitle.replace(regex, '<span class="hl">$1</span>');

        $(this).html(highlightedHtml).show();
        $(this).find(".hl").css({
          "background-color": "#fde047",
          "font-weight": "bold"
        });
        visibleCount++;
      } else {
        // 3. Hide non-matching courses
        $(this).hide();
      }
    });

    // 4. Update matched count dynamically
    $("#match-count").text(visibleCount);
  });

  // 5. Clear search -> reset input and show all courses
  $("#btn-clear").on("click", function () {
    $("#course-search").val("").trigger("keyup");
  });
});
