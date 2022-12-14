const { Decimal128 } = require("bson");
const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator");

const petSchema = new mongoose.Schema({
  petId: { type: Number, required: true },
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  sex: { type: String },
  age: { type: Decimal128 },
  size: { type: String },
  color: { type: String },
  description: { type: String },
});

petSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Pet", petSchema);
