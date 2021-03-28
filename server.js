const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require("cors");
app.use(cors());

var mongo_uri = "mongodb+srv://admin:1234@cluster.ayfcy.mongodb.net/Project?retryWrites=true&w=majority";
// var mongo_uri = "mongodb://localhost:27017/Project";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

app.use(express.json())

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

// path สำหรับ MongoDB ของเรา
var Projects = require("./router/projectRouter");
app.use("/api/projects", Projects);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});