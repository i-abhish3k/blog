const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array, //array is used to store multiple values as an array
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
