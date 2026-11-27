$(document).ready(function () {
  // Helper to dynamically insert success messages into the DOM
  function showSuccess(msg) {
    const $alert = $("<p>").text(msg).hide();
    $("#feedback-area").empty().append($alert);
    $alert.fadeIn(200);
  }

  // 1. Subscribe -> enable notifications
  $("#btn-sub").on("click", function () {
    $("#notif-status").text("Enabled").css("color", "green");
    $("#topics-container").removeClass("disabled-panel");
    showSuccess("Subscribed! All event notifications are now active.");
  });

  // 2. Unsubscribe -> disable notifications
  $("#btn-unsub").on("click", function () {
    $("#notif-status").text("Disabled").css("color", "red");
    $("#topics-container").addClass("disabled-panel");
    showSuccess("Unsubscribed! Notifications have been paused.");
  });

  // Function to handle topic removal and detach events with .off()
  function handleRemoveTopic() {
    const $btn = $(this);
    const topicName = $btn.siblings("span").text();

    // 4. Detach click event handler before removing element
    $btn.off("click");
    $btn.parent(".topic-item").remove();
    showSuccess(`Removed subscription topic: "${topicName}".`);
  }

  // Attach initial .on() click events to existing remove buttons
  $(".remove-topic").on("click", handleRemoveTopic);

  // 3. Dynamically add new subscription topics & attach .on() click event
  $("#btn-add-topic").on("click", function () {
    const topicVal = $("#new-topic-input").val().trim();
    if (!topicVal) return;

    const $removeBtn = $('<button class="remove-topic">Remove</button>');
    // Attach .on() click event directly to the newly created button
    $removeBtn.on("click", handleRemoveTopic);

    const $newItem = $('<div class="topic-item"></div>')
      .append($("<span></span>").text(topicVal))
      .append($removeBtn);

    $("#topics-container").append($newItem);
    $("#new-topic-input").val("");

    // 5. Show dynamic success message
    showSuccess(`Added new topic: "${topicVal}".`);
  });
});
