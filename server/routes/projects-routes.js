const express = require("express"),
  projectsController = require("../controllers/projects-controller"),
  router = express.Router();

router.get("/", projectsController.getAllProjects);

module.exports = router;
