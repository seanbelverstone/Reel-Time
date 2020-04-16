# Reel Time App
 
### Overview
 
This application will provide a user with a recommendation of a random recipe and a movie, based on their selection of cuisine type and genre.  The front end utilized React.js to keep the user-interface simple and responsive.  Express.js is used to keep track of routings and access to the MySQL database. Also, Passport.js was implemented to authenticate users and prevent access from unauthorized use. The generated recommendation is presented to the user and temporarily stored in local storage for easy access throughout the application.  Upon selecting 'Save & Watch', the movie and recipe will be stored into a Sequelize initiated MySQL database, where each 'Reel' saved will feature a user-specific userId in order to easily grab the relevant associated data when accessing the 'Saved Reels' page.
 
### User interaction logic
 
- 1. Log into the app with username and password
 
- 2. If new user, click the "New User" button to register with a username, email, and password.
 
- 3. After login, the user can choose a movie genre and cuisine type then click 'Create Reel'. This will take the user to next page, displaying their results. Alternatively, from the dashboard, you can view your previously saved Reels by selecting the 'Saved Reels' button.
 
- 4. Create Reel - Provides a recommendation of a movie and a recipe. The user can choose 'Re-Reel', which   generates another random selection based on the same criteria as chosen before. If they are happy with 		the results, they can click 'Save + Watch' which saves the choice to the database and offers up links to 	some video streaming providers. Finally, there is a button that allows the user to return to the 			dashboard.
 
- 5. My Saved Reels - This page displays all of the user's saved Reels. They can rate or delete them based on how their experience was.
 
 ### Technologies Used
- React.js
- MySQL
- Sequelize
- Passport.js
- Express.js
- Node.js
 
Live Heroku Link: [https://reel-time-app.herokuapp.com/]
