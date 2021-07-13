const express = require("express");

const app = express();

//Bring in routes
const {getPosts} = require("./routes/post");

app.get("/", getPosts);

const port = 8080;
app.listen(port, () =>
  console.log(`A node JS api is listening on port: ${port}`)
);
