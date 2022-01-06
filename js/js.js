// Animation init
new WOW().init();

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
});

(function ($) {
  $.fn.counter = function () {
    const $this = $(this),
      numberFrom = parseInt($this.attr("data-from")),
      numberTo = parseInt($this.attr("data-to")),
      delta = numberTo - numberFrom,
      deltaPositive = delta > 0 ? 1 : 0,
      time = parseInt($this.attr("data-time")),
      changeTime = 10;

    let currentNumber = numberFrom,
      value = (delta * changeTime) / time;
    var interval1;
    const changeNumber = () => {
      c;
      currentNumber += value;
      //checks if currentNumber reached numberTo
      (deltaPositive && currentNumber >= numberTo) ||
      (!deltaPositive && currentNumber <= numberTo)
        ? (currentNumber = numberTo)
        : currentNumber;
      this.text(parseInt(currentNumber));
      currentNumber == numberTo ? clearInterval(interval1) : currentNumber;
    };

    interval1 = setInterval(changeNumber, changeTime);
  };
})(jQuery);

$(document).ready(function () {
  $(".count-up").counter();
  $(".count1").counter();
  $(".count2").counter();
  $(".count3").counter();
  $(".count4").counter();

  new WOW().init();

  setTimeout(function () {
    $(".count5").counter();
  }, 3000);
});

// Preloader
$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(200)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

// Initiate the wowjs animation library
new WOW().init();

// Initiate superfish on nav menu
$(".nav-menu").superfish({
  animation: {
    opacity: "show",
  },
  speed: 400,
});
