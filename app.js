const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 1001;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const webRouter = require("./route/webRoute");
app.use(webRouter);

const apiRouter = require("./route/apiRoute");
app.use("/", apiRouter);

const dBDriver =
  "mongodb+srv://KillerTuri:nLfnCZdP1wSCtTDj@cluster0.ytyq8p5.mongodb.net/onlineCourse";
mongoose.connect(dBDriver, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`server start---->,http://localhost:${port} `);
});
