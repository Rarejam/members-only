const signupController = require("../controllers/signupController");
const express = require("express");
const signupRoute = express.Router();

signupRoute.get("/", (req, res) => {
  res.render("sign-up", { errors: [] });
});
signupRoute.post("/", signupController);

module.exports = signupRoute;
