const express = require("express"),
  projectsController = require("../controllers/projects-controller");

const router = express.Router();

router.get("/", projectsController.getAllProjects);
router.post("/create", projectsController.createProject);
router.post("/delete", projectsController.deleteProject);
router.post("/update", projectsController.updateProject);

module.exports = router;
