const express = require("express");
const petController = require("../controllers/pets-controller");

const router = express.Router();

router.get("/", petController.getAllPets);

module.exports = router;
