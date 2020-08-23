import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { PORT } from 'babel-dotenv'
import { getRouter } from '../router';
import { connect } from '../utils/db'

var app = express();

// =======================
// configuration =========
// =======================
var port = PORT || 8000;

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


export const start = () => {
  try {
    app.listen(port, () => {
      connect().then(() => {
        console.log("Database Connected")
        console.log(`REST API on http://localhost:${port}/api`)
      })
    })
  } catch (e) {
    console.error(e)
  }
}
