angular.module('sparrowFit')
.service('userDataService', function () {
  this.getWorkout = function(data, name) {
    var workout = {};
    if (data && name) {
      data.forEach(function(template){
          // console.log('Data on 6 ',template.templateName);
        if (template.templateName === name) {
          workout.template = template.workout;
          workout.workout_id = template._id;
          workout.user_id = template.user_id;
          workout.timed = template.timed;
        }
      });
    }
    return workout;
  };
});

