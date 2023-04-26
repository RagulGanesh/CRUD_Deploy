const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')
const path = require('path');

connectToMongo();
const app = express()
const port = 5000

//Middleware
app.use(express.json())
app.use(cors())
//Available Routes
app.use("/api/auth",require('./routes/auth'))
app.use("/api/books",require('./routes/books'))

//serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




