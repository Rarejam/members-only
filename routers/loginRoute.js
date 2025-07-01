const passport = require("passport");
const express = require("express");
const loginRoute = express.Router();

loginRoute.get("/", (req, res) => {
  res.render("log-in");
});
loginRoute.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/log-in",
  })
);

module.exports = loginRoute;
