const express = require('express')


const tutorialController = require("../controllers/tutorialController")


const routes = express.Router()

routes.post("/", tutorialController.create);

routes.get("/", tutorialController.findAll);

// Retrieve all published Tutorials
routes.get("/published", tutorialController.findAllPublished);

// Retrieve a single Tutorial with id
routes.get("/:id", tutorialController.findOne);

// Update a Tutorial with id
routes.patch("/:id", tutorialController.update);

// Delete a Tutorial with id
routes.delete("/:id", tutorialController.delete);

// Delete all Tutorials
routes.delete("/", tutorialController.deleteAll);


module.exports = routes