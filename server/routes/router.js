const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/////////////////////////////////////////////////////////////////////////////////////////

route.get("/", services.homeRoutes);

route.get("/add-book", services.add_book);

route.get("/update-book", services.update_book);

////////////////////////////////////////////////////////////////////////////////////////

route.get("/api/books", controller.find);

route.post("/api/books", controller.create);

//route.get("/api/books/:id", controller.findById);

route.put("/api/books/:id", controller.update);

route.delete("/api/books/:id", controller.delete);

module.exports = route;
