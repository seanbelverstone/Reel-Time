const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("./strategies/local");
const JWTStrategy = require("./strategies/jwt");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

passport.use(LocalStrategy);
passport.use(JWTStrategy);
 
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
