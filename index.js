const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");



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

app.use("/api/users",require("./routes/user.routes"))
app.use("/api/center",require("./routes/center.routes"))
app.use("/api/sale",require("./routes/sale.routes"))


app.listen(8081,()=>{
    console.log("server started at port http://localhost:8081")
});
