angular.module('sparrowFit')
.service('timerService', function () {

  this.clock = function(data) {
    var innerFunction = function(data, position = 0, autoStart = false) {
      $('.timer').text('Start');
      var clock = new FlipClock($('.your-clock'), {
      clockFace: 'MinuteCounter',
      autoStart: autoStart,
      countdown: true,
      position: position,

      callbacks: {
        start: function() {
          console.log('clock has started');
        },
        stop: function() {
          console.log('position', position);
          if (position < data.length - 1) {
            position = position + 1;
            clock.startVal = false;
            clock.timeSet = false;
            innerFunction(data, position, clock.autoStart);
          } else {
            console.log('No more data, clock is done');
          }
        }
      },

      //CUSTOM CHECK VALUES (NOT KEYWORDS)
      startVal: false,
      timeSet: false

    });

    console.log('data: ', data, 'pos: ', position);

    var name = data[position][0];
    var time = data[position][1];
    console.log('name: ', name, " time: ", time);


    if (Number.isInteger(Number(time)) && Number(time) > 0) {
          clock.timeSet = true;
          clock.setTime(Number(time));
        } else {
          alert("Insert a number");
        }

    $(".clockname").text(name);
    if (clock.autoStart) {
      clock.start();
    }

    $(".timer").click(function() {
      if (!clock.autoStart) {
        clock.autoStart = true;
        clock.start();
      }
    });

    //START AND STOP THE TIMER
    // $(".timer").click(function() {
    //   if (clock.timeSet) {
    //     if (clock.startVal) {
    //       $(".timer").text("Start");
    //       clock.stop();
    //       clock.startVal = false;
    //     } else {
    //       $(".timer").text("Stop");
    //       clock.start();
    //       clock.startVal = true;
    //     }
    //   }
    // });
    }
    innerFunction(data);
  };
});