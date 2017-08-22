angular.module('sparrowFit')
.service('timerService', function () {

//Wondering where that fancy flip clock comes from? Look no further, it's all builth in this file.
//FlipClock is a clock tool and many of the following functions come from it's library at flipclockjs.com.

//The following function takes in an array of tuples with tuples structured as [name, time].
//It starts by creating a timer based on the first tuple and creates one based on the next tuple when the first one stops.

//Most of the following code is in JQuery despite a majority of the front end being Angular
  this.clock = function(data) {
    var innerFunction = function(data, position = 0, autoStart = false) {
      $('.timer').text('Start');
      var clock = new FlipClock($('.your-clock'), {
        clockFace: 'MinuteCounter',
        autoStart: autoStart,
        //if countdown is false, it will act as a stopwatch
        countdown: true,
        position: position,

        callbacks: {
          //Use these to call a function when the clock starts or stops.
          start: function() {
            console.log('Clock has started')
          },
          stop: function() {
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

    var name = data[position][0];
    var time = data[position][1];


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

    }
    innerFunction(data);
  };
});