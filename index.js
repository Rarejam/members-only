const path = require("node:path");
const express = require("express");
const app = express();
require("dotenv").config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./passportConfig");
const expressFlash = require("express-flash");
// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcryptjs");
app.use(passport.initialize());
app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
initializePassport(passport);
app.use(expressFlash());

const indexRoute = require("./routers/indexRoute");
const signupRoute = require("./routers/signupRoute");
const loginRoute = require("./routers/loginRoute");
const homeRoute = require("./routers/homeRoute");
const newRoute = require("./routers/newRoute");
const adminRoute = require("./routers/adminRoute");

app.use("/", indexRoute);
app.use("/sign-up", checkAuthenticate, signupRoute);
app.use("/log-in", checkAuthenticate, loginRoute);
app.use("/home", checkNotAuthenticate, homeRoute);
app.use("/new", checkNotAuthenticate, newRoute);
app.use("/admin", checkNotAuthenticate, adminRoute);
//req.logout() is given to us by our passport and takes a callback funcc to where itll redirect to
app.use("/log-out", (req, res) => {
  req.logout(() => {
    res.redirect("/log-in");
  });
});

//check if the user is signed in ,if so and user tries to access the
//login / signup page , user will be redirected back to /home page
// isAutheticated() if a func given by passport
function checkAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/home");
  }
  next();
}

//checks if user is signed in ,if so , user can move on but if not user signed-in and user tries to access...
// /home page, user is redirected to log-in page to sign in....
// isAutheticated() if a func given by passport.
function checkNotAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/log-in");
}

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`app is listening at port ${PORT}`);
});
