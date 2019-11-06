# Reel Time App

### Overview

This application will serve to the users with recommendation of a food dish and a movie.  Front end utilized React library to keep user-interface simple and responsive.  Express npm is used to keep track of routings and access to database.  App used Passport to authenticate unauthorized users.  Deployment of app is done through Heroku.  Generated recommendation is present to the user temporarily stored on Local Storage.  Upon selection done by user, movie and dish will be store in Sequelize database

### User interaction logic

- 1a - Log into app with Username and Password
- 1b - If new user, click "New User" button to register with Username, Email, and Password.

- 2a - After log in, user input of choice of movie genre and cuisine type, then click "My Saved Reels" or "Create Reel"

- 3a - My Saved Reels - this page would populate watched movie and selected dish, star rating is available for user to record the experience
- 3a - Create Reel - provide a recommendation of a movie and a dish 
