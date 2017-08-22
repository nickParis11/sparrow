# SparrowFit

## Introduction

SparrowFit is a web based application that allows a user to create workout plans and use their created templates during their workout with a timer to help through each exercise.

# How to Use

This will guide you through installing and opening the app, creating a workout and starting the workout assistant tool.

### Step One: Install Dependencies
First, run "npm install" from the root directory of this repository.
This will install all requirements needed to run the core program.

### Step Two: Start the Server
Next, run "npm start", which will start the server on "localhost:3002"

### Step Three: Authenticate
Navigate to "localhost:3002" in the browser which will render to home page.
In the top right corner of the screen, click on "Login" and Sign Up/Log In using the OAuth App

### Step Four: Create Your First Workout
After logging in, a new bar should display in the top left corner.
Click on "Create Workout" and then "Create Timed Workout" to get to the Create Workout Component page.

The Create Workout Component page has two section. Fill out the Template Name to name your workout,
Then, you can add individual exercises by filling out a name, duration and the a break time between exercises.

Ex. Name: "Pushups", Duration: "1 minute 30 seconds", Break: "45" would be one exercise of a Workout.
Click the "Add Exercise" button to add an exercise to the workout template.
Once you have all of the exercises you want in the template, click the "Add Template" button.

### Using Your Workout
From here, click on the "Workout" tab to the right of "Create Workout".
On the Workout page, select a previously created template by either typing its name into the text field
or by clicking on Timed or Untimed Workout buttons and clicking on a workout the button displays.
This will display the details of the workout. Click the "Add Data to Timer" button to create a timer.
Lastly, click "Start" to begin the timer which will run through the created workout.



# Program Structure
SparrowFit is built using the MEAN stack along with some help for Auth0, FlipClock.JS and Bootstrap.

## The Database
SparrowFit's Mongo Database code is built in the "db" folder containing two files.
First, mongoose-schemas.js creates schemas for four different Database tables.

"User" stores information on individual users to the app.
"Template" stores the workouts that are created a user.
"History" stores the previous activity of a user.
"Goals" stores information on goals the user sets for themselves.

"/db" also contains "seed.js" which clears and adds fake data to the database when run.

## The Server
The server's code is stored in "/server/index.js", which creates an Express server
to serve up the client-side code, check that a user is logged in, and make database queries when endpoints are reached.

The code in this file will show all of the possible GET and POST requests that can be made to the server and is where new ones can be added.

## The Client"
Lastly, the "src" folder handles the client side code, containing the necessary dependencies, html, css and relevant javascript.

Along with more modularized folders, "/src" contains "index.html", which is the main html file which the client will be loaded into, and which will load app.js to help with state-based routing. The other folders contain specific code for the different sections of the app to be loaded, most of which are contaiined inside of "/src/client".

Inside of "/src/client", "/components" contains the different aspects for the program, creating the view and code to create workouts, goals, and load and navigating through a workout. Each of these is taken care in its corresponding folder.

The other folder inside of client is "services", which contains Angular services used throughout the program.