const adminController = require("../controllers/adminController");
const express = require("express");
const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
  res.render("admin");
});
adminRoute.post("/", adminController);
module.exports = adminRoute;
