const newController = require("../controllers/newController");
const express = require("express");
const newRoute = express.Router();

newRoute.get("/", (req, res) => {
  res.render("new");
});
newRoute.post("/", newController);

module.exports = newRoute;
