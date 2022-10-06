const Project = require("../models/Project");
// have to make an error class handling middleware

const getAllProjects = async (_, res, next) => {
  const projects = await Project.find();
  res.json({
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
};

const createProject = async (req, res, next) => {
  const { name, description, techStackTags } = req.body;

  //need an id generator here
  const createdProject = new Project({
    name,
    description,
    techStackTags,
  });
  try {
    const result = await createdProject.save();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to create project: " + err.message });
  }
  return res.status(201).json({ project: result });
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Project.findByIdAndDelete(id);
  } catch (err) {
    return res
      .status(404)
      .json({ message: "Project not found " + err.message });
  }
  return res.status(200).json({ project: result });
};

const updateProject = async (req, res, next) => {
  const { id, name, description, techStackTags } = req.body;
  try {
    const result = await Project.findByIdAndUpdate(
      id,
      { name, description, techStackTags },
      { new: true }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ project: result });
};

exports.getAllProjects = getAllProjects;
exports.createProject = createProject;
