$(document).ready(function() {
  let sidebarShown = false;
  $("#nav-icon2").click(function() {
    $(this).toggleClass("open");
    if (!sidebarShown) {
      $("#sidebar").toggleClass("active");
      setTimeout(function() {
        $("#sidebar ul").toggleClass("hide");
      }, 400);
      sidebarShown = true;
    } else {
      $("#sidebar ul").toggleClass("hide");
      setTimeout(function() {
        $("#sidebar").toggleClass("active");
      }, 200);
      sidebarShown = false;
    }
  });
});
