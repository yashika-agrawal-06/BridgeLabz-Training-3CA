$(document).ready(function () {
  // 1. Append a new post to the bottom of the list
  $("#btn-append").on("click", function () {
    const title = $("#post-title").val().trim() || "Untitled Standard Post";
    const $post = $(`<article class="blog-post"><h3>${title}</h3><p>Published via Admin Panel.</p></article>`);
    $("#posts-container").append($post);
    $("#post-title").val("");
  });

  // 2. Prepend a featured post at the very top
  $("#btn-prepend").on("click", function () {
    const title = $("#post-title").val().trim() || "Featured Announcement";
    const $featured = $(`<article class="blog-post"><h3>[FEATURED] ${title}</h3><p>Pinned to the top of the feed.</p></article>`);
    $("#posts-container").prepend($featured);
    $("#post-title").val("");
  });

  // 3. Remove the last post in the list
  $("#btn-remove-last").on("click", function () {
    $("#posts-container .blog-post").last().remove();
  });

  // 4. Add tags before the heading and after the paragraph using .before() and .after()
  $("#btn-add-tags").on("click", function () {
    $(".blog-post").each(function () {
      if ($(this).find(".tag-badge").length === 0) {
        $(this).find("h3").before('<span class="tag-badge">#Tech</span>');
        $(this).find("p").after('<span class="tag-badge">Read Time: 3 min</span>');
      }
    });
  });

  // 5. Dynamically highlight posts containing a specific keyword
  $("#keyword-input").on("keyup", function () {
    const keyword = $(this).val().trim().toLowerCase();

    $(".blog-post").each(function () {
      const content = $(this).text().toLowerCase();
      if (keyword !== "" && content.includes(keyword)) {
        $(this).addClass("keyword-match");
      } else {
        $(this).removeClass("keyword-match");
      }
    });
  });
});
