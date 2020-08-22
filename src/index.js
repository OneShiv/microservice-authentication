import uniqid from 'uniqid';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { PORT, DB_URL, APP_URL } from 'babel-dotenv'
import { getRouter } from '../router';

var app = express();
console.log(PORT)

// =======================
// configuration =========
// =======================
var port = PORT || 8000; // used to create, sign, and verify tokens
try {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("Database connected")
  }); // connect to database
} catch (err) {
  console.log("Failed to connect to db")
}


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use("/api", getRouter());

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "ok"
  })
})

app.listen(port, () => {
  console.log("server started at " + APP_URL + port);
})
