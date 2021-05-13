$(document).ready(function() {
  if ($.cookie("modal_shown") == null) {
    $.cookie("modal_shown", "yes", {
      expires: 1,
      path: "/"
    });
    $("#year-end-overlay").foundation("reveal", "open");
  }
});

// Countdown Clock
$("#clock").countdown("2020/01/01", function(event) {
  $(this).html(event.strftime('<span class="days unit">%D <span class="time">Days</span></span> <span class="hours unit">%H <span class="time">Hours</span></span> <span class="minutes unit">%M <span class="time">Minutes</span></span> <span class="seconds unit">%S <span class="time">Seconds</span></span>'));
});
