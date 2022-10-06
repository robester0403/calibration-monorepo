const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator");

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  techStackTags: { type: [String] }, // change to [techStackTagSchema] if we build that way
});

projectSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Project", projectSchema);
