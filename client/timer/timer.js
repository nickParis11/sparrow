var clock = new FlipClock($('.your-clock'), {
  clockFace: 'MinuteCounter',
  autoStart: false,
  countdown: true,

  onStart: function() {
    console.log("function loads when the clock starts")
  },

  //CUSTOM CHECK VALUES (NOT KEYWORDS)
  startVal: false,
  timeSet: false
});


//START AND STOP THE TIMER
$(".timer").click(function() {

  //SET TIME FOR COUNTDOWN
  if (!clock.timeSet) {
    var time = $(".settime").val();
    if (Number.isInteger(Number(time)) && Number(time) > 0) {
      clock.timeSet = true;
      clock.setTime(Number(time));
    } else {
      alert("Insert a number");
    }
  } else {
    console.log('in click event');
    if (clock.startVal) {
      $(".timer").text("Start");
      clock.stop();
      clock.startVal = false;
    } else {
      $(".timer").text("Stop");
      clock.start();
      clock.startVal = true;
    }
  }

});



