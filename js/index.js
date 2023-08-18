$(window).ready(function () {
  let currentDate, remainingDays, remainingHours, remainingMins, remainingSec;
  const targetDate = new Date("Sep 30, 2023 23:59:59");

  // close navbar menu at right
  // -------------------------------------------
  $(".fa-xmark").click(function () {
    $(".menu").animate({ right: "-300px" }, 500);
  });

  // open navbar menu
  // -------------------------------------------
  $("#menuIcon").click(function () {
    $(".menu").animate({ right: "0px" }, 500);
  });

  // change color of navbar when scroll
  // -------------------------------------------
  let detailsOffset = $("#details").offset().top;
  $(window).scroll(function () {
    let windowOffset = $(window).scrollTop();
    if (windowOffset > detailsOffset - 100) {
      $("nav").addClass("nav-scroll");
      $("#toTop").fadeIn(500);
    } else {
      $("nav").removeClass("nav-scroll");
      $("#toTop").fadeOut(500);
    }
  });

  // courses accordion open and close items
  // -------------------------------------------
  $("h4 span, h4 i").click(function (e) {
    console.log(e.target);
    $(e.target).parent().children(".fa-plus").toggle();
    $(e.target).parent().children(".fa-minus").toggle();
    $(e.target).parent().siblings("p").slideToggle(500);
    $(e.target).parent().parent().siblings().children("p").slideUp(500);
    $(e.target)
      .parents(".course")
      .siblings()
      .children("h4")
      .children(".fa-plus")
      .show();
    $(e.target)
      .parents(".course")
      .siblings()
      .children("h4")
      .children(".fa-minus")
      .hide();
    console.log(5);
  });

  // a timer for getting the time for starting courses
  // -------------------------------------------
  function timer() {
    currentDate = new Date();
    remainingDays = Math.floor(
      (targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    remainingHours = targetDate.getHours() - currentDate.getHours();
    remainingMins = targetDate.getMinutes() - currentDate.getMinutes();
    remainingSec = targetDate.getSeconds() - currentDate.getSeconds();
    $(".days span").text(remainingDays);
    $(".hours span").text(remainingHours);
    $(".minutes span").text(remainingMins);
    $(".seconds span").text(remainingSec);

    if (
      remainingDays === 0 &&
      remainingHours === 0 &&
      remainingMins === 0 &&
      remainingSec === 0
    ) {
      clearInterval(counter);
      $("#counter")
        .html("Wait until the next round")
        .css({ justifyContent: "center" });
    }
  }

  let counter = setInterval(timer, 1000);

  // calc remaining chars for the textarea
  // -------------------------------------------
  const charsnum = 100;
  $("textarea").keyup(function (e) {
    const remain = charsnum - e.target.value.length;
    $("#contact span").text(remain)
  });
});
