$(document).ready(function () {
  // 1. Display personalized greeting based on current hour
  const hour = new Date().getHours();
  let timeGreeting = "Good Evening";

  if (hour < 12) {
    timeGreeting = "Good Morning";
  } else if (hour < 18) {
    timeGreeting = "Good Afternoon";
  }
  $("#greeting-text").text(`${timeGreeting}, Visitor! Welcome back.`);

  // List of motivational quotes
  const quotes = [
    "Small progress every day adds up to big results.",
    "Focus on being productive instead of busy.",
    "The secret of getting ahead is getting started.",
    "Great things never come from comfort zones.",
    "Dream big, start small, act now."
  ];
  let quoteIndex = 0;

  // 2. Change greeting text to a motivational quote on button click
  $("#btn-quote").on("click", function () {
    $("#greeting-text").text(quotes[quoteIndex]);
    quoteIndex = (quoteIndex + 1) % quotes.length;
  });

  // 3. Toggle visibility of the welcome paragraph
  $("#btn-toggle-msg").on("click", function () {
    $("#welcome-msg").toggle(300);
  });

  // 4. Show alert when the greeting heading is clicked
  $("#greeting-text").on("click", function () {
    alert("Current Message: " + $(this).text());
  });
});
