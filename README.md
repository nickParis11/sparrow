# SparrowFit
## Let Your Workout Soar

##Introduction

SparrowFit is a web based application that allows a user to create workout plans and use their created templates during their workout with a timer to help through each exercise.

##How to Use##

This will guide you through installing and opening the app, creating a workout and starting the workout assistant tool.

###Step One: Install Dependencies###
First, run "npm install" from the root directory of this repository.
This will install all requirements needed to run the core program.

###Step Two: Start the Server###
Next, run "npm start", which will start the server on "localhost:3002"

###Step Three: Authenticate###
Navigate to "localhost:3002" in the browser which will render to home page.
In the top right corner of the screen, click on "Login" and Sign Up/Log In using the OAuth App

###Step Four: Create Your First Workout###
After logging in, a new bar should display in the top left corner.
Click on "Create Workout" and then "Create Timed Workout" to get to the Create Workout Component page.

The Create Workout Component page has two section. Fill out the Template Name to name your workout,
Then, you can add individual exercises by filling out a name, duration and the a break time between exercises.

Ex. Name: "Pushups", Duration: "1 minute 30 seconds", Break: "45" would be one exercise of a Workout.
Click the "Add Exercise" button to add an exercise to the workout template.
Once you have all of the exercises you want in the template, click the "Add Template" button.

###Using Your Workout###
From here, click on the "Workout" tab to the right of "Create Workout".
On the Workout page, select a previously created template by either typing its name into the text field
or by clicking on Timed or Untimed Workout buttons and clicking on a workout the button displays.
This will display the details of the workout. Click the "Add Data to Timer" button to create a timer.
Lastly, click "Start" to begin the timer which will run through the created workout.