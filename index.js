const express = require("express");
const app = express();
const cors = require("cors");

const services = require("./services.json");

app.use(cors());

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/services", (req, res) => {
  res.send(services);
});

app.get("/services/:id", (req, res) => {
  const id = req.params.id;
  const service = services.find((item) => item._id === id) || {};
  res.send(service);
});

app.listen(port, () => {
  console.log(`Listening on prot ${port}`);
});
