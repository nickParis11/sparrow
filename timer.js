var clock = new FlipClock($('.your-clock'), {
  clockFace: 'MinuteCounter',
  autoStart: false,
  countdown: true, //SET THIS TO FALSE FOR A STOP WATCH

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

  //START AND STOP THE TIMER
  } else {
    console.log('in click event');
    //IF STOPPED, START THE TIMER
    if (clock.startVal) {
      $(".timer").text("Start");
      clock.stop();
      clock.startVal = false;
    //IF RUNNING, STOP THE TIMER
    } else {
      $(".timer").text("Stop");
      clock.start();
      clock.startVal = true;
    }
  }
});



