$(document).ready(function () {
  // 1. Hide specific banner (#b1)
  $("#btn-hide").on("click", function () {
    $("#b1").hide();
  });

  // 2. Show all hidden banners
  $("#btn-show").on("click", function () {
    $(".banner").show();
  });

  // 3. Slide Up/Down toggle on Banner 2
  $("#btn-slide").on("click", function () {
    $("#b2").slideToggle(400);
  });

  // 4. Fade In/Out toggle on Banner 3
  $("#btn-fade").on("click", function () {
    $("#b3").fadeToggle(400);
  });

  // 5. Automatically rotate spotlight banners every 5 seconds using fadeOut() and fadeIn()
  let currentIndex = 0;
  const $slides = $(".rotate-slide");

  setInterval(function () {
    const nextIndex = (currentIndex + 1) % $slides.length;

    $slides.eq(currentIndex).fadeOut(400, function () {
      $slides.eq(nextIndex).fadeIn(400);
    });

    currentIndex = nextIndex;
  }, 5000);
});
