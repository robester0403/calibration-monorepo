const uuid4 = require("uuid4");
const Project = require("../models/Project");
// have to make an error class handling middleware

const getAllProjects = async (_, res, next) => {
  const projects = await Project.find();
  return res.json({
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
};

const createProject = async (req, res, next) => {
  const id = uuid4();
  const { name, description, techStackTags } = req.body;

  // need an id generator here
  // should I be porting this to another file?
  const createdProject = new Project({
    name,
    description,
    techStackTags,
  });
  try {
    await createdProject.save();
  } catch (err) {
    return res.status(500).json({ message: "Failed to create project" });
  }
  return res.status(201).json({ project: createdProject });
};

const deleteProject = async (req, res, next) => {
  const { id } = req.body;
  try {
    await Project.findByIdAndDelete({ _id: id });
  } catch (err) {
    return res
      .status(404)
      .json({ message: "Project not found " + err.message });
  }
  return res.status(200).json({ message: "Project deleted: " + id });
};

const updateProject = async (req, res, next) => {
  const { id, name, description, techStackTags } = req.body;
  try {
    await Project.findByIdAndUpdate(
      { _id: id },
      { name, description, techStackTags },
      { new: true }
    );
  } catch (err) {
    next(res.status(500).json({ message: err.message }));
  }
  return res
    .status(200)
    .json({ project: { id, name, description, techStackTags } });
};

exports.getAllProjects = getAllProjects;
exports.createProject = createProject;
exports.deleteProject = deleteProject;
exports.updateProject = updateProject;
