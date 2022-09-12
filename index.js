const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Doc = require("./model/Files");

// configure .env
dotenv.config();
app.use(cors());

app.use(express.json());

// mongoose database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch(function (err) {
    console.error("Mongo db connection error: ", err.message);
  });

//   routing:
// user-based routing

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/center", require("./routes/center.routes"));
app.use("/api/sale", require("./routes/sale.routes"));
app.use("/api/file", require("./routes/files.routes"));

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 5000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
app.post(
  "/uploadImage",
  imageUpload.single("file"),
  (req, res) => {
    // res.send(req.file);
    console.log(req.body.message);
    const product = new Doc({
      productImage: req.file.path,
      message: req.body.message,
    });
    product.save();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(8081, () => {
  console.log("server started at port http://localhost:8081");
});
