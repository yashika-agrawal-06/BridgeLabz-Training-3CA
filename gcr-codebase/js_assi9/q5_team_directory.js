$(document).ready(function () {
  // 1. Click a manager -> highlight all direct reports inside the sibling .member-list
  $(".manager").on("click", function () {
    $(this).next(".member-list").find(".member").toggleClass("highlight-report");
  });

  // 2. Hover on an employee -> show contact info using .next()
  $(".member").hover(
    function () {
      $(this).next(".contact-info").stop(true, true).fadeIn(150);
    },
    function () {
      $(this).next(".contact-info").stop(true, true).fadeOut(150);
    }
  );

  // 3. Click on a department header -> change background of all child members using .children()
  $(".dept-header").on("click", function (e) {
    if ($(e.target).hasClass("toggle-team")) return; // Ignore if clicking the collapse button
    $(this).next(".team-body").children(".member-list").children(".member").toggleClass("dept-active");
  });

  // 4. Select a random employee -> highlight sibling employees
  $("#btn-random-emp").on("click", function () {
    $(".member").removeClass("highlight-sibling");
    const $allMembers = $(".member");
    const randomIndex = Math.floor(Math.random() * $allMembers.length);
    const $chosen = $allMembers.eq(randomIndex);

    // Highlight sibling .member elements within the same list
    $chosen.siblings(".member").addClass("highlight-sibling");
    alert(`Selected: ${$chosen.text()} — Highlighted their direct teammates!`);
  });

  // 5. Collapse/expand team using .parent() and .find()
  $(".toggle-team").on("click", function () {
    $(this).parent().parent().find(".team-body").slideToggle(250);
  });
});
