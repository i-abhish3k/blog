const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
      unique: true,
    },
    description: {
      type: String, //string is the datatype of data that we are storing in our database
      // minlength: [50 ,"Title should be atleast 10 characters long"],
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
