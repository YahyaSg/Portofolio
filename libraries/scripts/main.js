function scrollNav() {
  $(".navbar a").click(function () {
    $(".active-nav").removeClass("active-nav");
    $(this).addClass("active-nav");

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        300
      );
    return false;
  });
}
scrollNav();

function activeTabs() {
  $(".section-portofolio .nav-link").click(function () {
    $(".active-tabs").removeClass("active-tabs");
    $(this).addClass("active-tabs");

    return false;
  });
}
activeTabs();

$(document).ready(function () {
  $(".content").slice(0, 8).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if ($(".content:hidden").length == 0) {
      $("#loadMore").addClass("noContent");
    }
  });
});
