const express = require("express");
const app = express();
const morgan = require("morgan");

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
