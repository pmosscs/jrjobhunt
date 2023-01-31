const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

const { addUser } = require("./util/controllers");

server.post("/adduser", addUser);

server.listen(4000, () => {
  console.log("server running on 4000");
});
