// - id =>PK
// -user_id => FK referencing the user that has created the goal
// - number
// - time frame
// - start date
// - end date
// - name
//console.log('fakeJSONGoals.js is loading')

var fakeJSON_goals= [
{id:'0',
  number:3,
  timeFrame : 'week',
  creationDate:'08-15-2017',// Nich H do you think this date format can be easily retrieved from the db ?
  //endDate : '11-15-2017', // Nich H do you think this date format can be easily retrieved from the db ?
  name : 'weekly exercice',
  alertByEmail : false
},
{id:'1',
  number:6,
  timeFrame : 'month',
  creationDate:'08-15-2017',// Nich H do you think this date format can be easily retrieved from the db ?
  //endDate : '11-15-2019', // Nich H do you think this date format can be easily retrieved from the db ?
  name : 'bare minimum monthly exercize',
  alertByEmail : true
}
]
