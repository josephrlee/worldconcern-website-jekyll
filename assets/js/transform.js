$(document).ready(function() {
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        400,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Sep 14, 2019 06:00:00").getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)), (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)), (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)), (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));
    }, second);
});
