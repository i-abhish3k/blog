const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/post");
const categoryRouter = require("./routes/category");
const multer = require("multer");
const cors = require("cors");

// .env config
dotenv.config();

// REST OBJ
const app = express();

app.use(express.json());

// Enable CORS for  frontend's origin
app.use(cors({ origin: "http://localhost:5173" }));

// DB Connect
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

// !  Image uploading using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File  has been uploaded");
});

// router
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

// REST API
app.use("/", (req, res) => {
  console.log("This is main url from server");
});

//* app listen
app.listen("5000", (req, res) => {
  console.log("Backend is running");
});
