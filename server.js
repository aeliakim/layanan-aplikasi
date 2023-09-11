const express = require("express");
const http = require("http");
const app = express();
const port = 3000;

app.use(express.static("web-interaktif"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/web-interaktif/index.html");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
