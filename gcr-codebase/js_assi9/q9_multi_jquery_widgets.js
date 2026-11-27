// 5. Release global $ and jQuery from the newer version (3.7.1) and assign to jqV2
const jqV2 = jQuery.noConflict(true);
// Assign the remaining global jQuery (1.12.4) to jqV1
const jqV1 = jQuery.noConflict(true);

// Display both loaded versions to confirm isolation
jqV1("#version-info").text(`Running jQuery v${jqV1.fn.jquery} alongside jQuery v${jqV2.fn.jquery}`);

// --- LOGIC USING jQuery VERSION 1 (jqV1) ---
jqV1(document).ready(function () {
  let slideIdx = 0;
  const $slides = jqV1("#widget-carousel .slide");

  // 1. Version 1 handles carousel slider rotation
  jqV1("#next-slide").on("click", function () {
    $slides.eq(slideIdx).removeClass("current");
    slideIdx = (slideIdx + 1) % $slides.length;
    $slides.eq(slideIdx).addClass("current");
  });

  // 3. Version 1 highlights whichever widget is clicked
  jqV1(".widget").on("click", function () {
    jqV1(".widget").removeClass("active-widget");
    jqV1(this).addClass("active-widget");
  });
});

// --- LOGIC USING jQuery VERSION 2 (jqV2) ---
jqV2(document).ready(function () {
  // 2. Version 2 manages modal popups for notifications
  jqV2("#open-modal").on("click", function () {
    jqV2("#custom-modal").fadeIn(200);
  });

  jqV2("#close-modal").on("click", function () {
    jqV2("#custom-modal").fadeOut(200);
  });

  // 4. Version 2 attaches dynamic tooltips on hover
  jqV2(".has-tooltip").hover(
    function (e) {
      const tipText = jqV2(this).data("tip");
      jqV2("#tooltip-box")
        .text(tipText)
        .css({ top: e.pageY + 10 + "px", left: e.pageX + 10 + "px" })
        .fadeIn(150);
    },
    function () {
      jqV2("#tooltip-box").fadeOut(150);
    }
  );
});
