$(document).ready(function () {
  // 1. Single click on question toggles its answer visibility
  $(".faq-question").on("click", function () {
    $(this).next(".faq-answer").slideToggle(200);
  });

  // 2. Hover changes question text color
  $(".faq-question").hover(
    function () {
      $(this).css("color", "#2563eb");
    },
    function () {
      $(this).css("color", "#000000");
    }
  );

  // 3. Double-click any question to collapse all open answers
  $(".faq-question").on("dblclick", function () {
    $(".faq-answer").slideUp(200);
  });

  // 4. Focus on input inside answer highlights the parent question
  $(".faq-answer input").on("focus", function () {
    $(this).closest(".faq-item").find(".faq-question").css("background-color", "#fef08a");
  });

  // 5. Blur from input resets the parent question's background color
  $(".faq-answer input").on("blur", function () {
    $(this).closest(".faq-item").find(".faq-question").css("background-color", "transparent");
  });
});
