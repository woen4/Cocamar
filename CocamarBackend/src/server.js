const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(routes);

server.listen(process.env.PORT || 3333);
