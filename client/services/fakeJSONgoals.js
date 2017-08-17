// - id =>PK
// -user_id => FK referencing the user that has created the goal
// - number
// - time frame
// - start date
// - end date
// - name
//console.log('fakeJSONGoals.js is loading')

var fakeJSON_goals= [
{id:0,
  number:3,
  timeFrame : 'week',
  startDate:'08-15-2017',// Nich H do you think this date format can be easily retrieved from the db ?
  endDate : '11-15-2017', // Nich H do you think this date format can be easily retrieved from the db ?
  name : ' weekly exercice',
  alertByEmail : false,
  completionRate : 8,
  workoutPace : 17,
  workoutPosition : 'behind',
  MotivationPhrase:"you should move this a** while it still can get up of that chair"
},
{id:1,
  number:6,
  timeFrame : 'month',
  startDate:'08-15-2017',// Nich H do you think this date format can be easily retrieved from the db ?
  endDate : '11-15-2019', // Nich H do you think this date format can be easily retrieved from the db ?
  name : 'bare minimum monthly exercize',
  alertByEmail : true,
  completionRate : 75,
  workoutPace : 6,
  workoutPosition : 'ahead of',
  MotivationPhrase:"Take it easy you gonna break this app if you exercize at this pace"
}
]
