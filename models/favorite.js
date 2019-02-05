let mongoose = require("mongoose");

// create a model class
let favouriteSchema = mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    collection: "favouriteThings"
  }
);

module.exports = mongoose.model("khushboo", favouriteSchema);
