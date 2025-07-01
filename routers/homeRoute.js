const homeController = require("../controllers/homeController");
const express = require("express");
const homeRoute = express.Router();

homeRoute.get("/", homeController);

module.exports = homeRoute;
