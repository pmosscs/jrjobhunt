const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

const { addUser } = require("./util/controllers");

server.post("/adduser", addUser);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`server running on ${port}`);
});
