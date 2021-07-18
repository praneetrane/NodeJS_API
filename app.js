const express = require("express");
const app = express();
const morgan = require("morgan");

//import mongoose
const mongoose=require('mongoose');
//load env variables
const dotenv=require('dotenv');
dotenv.config();

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true }
 // { }
)
.then(()=> console.log('DB Connected'));

mongoose.connection.on('error',err=>{
  console.log(`DB connection error: ${err.message}`)
});

//Bring in routes
const postRoutes = require("./routes/post");

const myownMiddelware = (req, res, next) => {
  console.log("middleware applied!!");
  next();
};

// middleware
app.use(morgan("dev"));
app.use(myownMiddelware);

app.use("/", postRoutes);

const port = 8080;
app.listen(port, () =>
  console.log(`A node JS api is listening on port: ${port}`)
);
