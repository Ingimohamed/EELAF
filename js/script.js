function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("links").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "130px";
  document.getElementById("links").style.display = "none";
}

$("#toggle_container").click(function () {
  if ($(".icon").hasClass("close")) {
    closeNav();
  } else {
    openNav();
  }
  $(".icon").toggleClass("close");
  $(".login-signup-text").toggle("slow");
});


$("#wrapper").click( function() {
	$(".icon").toggleClass("close");
});


$(".carousel").on("slid.bs.carousel", function () {
  $(this).find(".carousel-indicators2 li").removeClass("active");
  indicators = $(this).find(".carousel-indicators li.active").data("slide-to");
  a = $(this)
    .find(".carousel-indicators2")
    .find("[data-slide-to='" + indicators + "']")
    .addClass("active");
});

$("#myCarousel").carousel({
  pause: "none",
});

//Animation AOS
AOS.init({
  easing: 'ease-in-out-sine'
});


