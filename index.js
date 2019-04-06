const port = process.env.PORT || 3000;
const apiDocs = require("./swagger.json");

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ingredients, snacks } = require("./constants")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/ingredients", (req, res) => res.json(ingredients));

app.get("/snacks", (req, res) => res.json(snacks));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

const server = http.createServer(app);

server.listen(port, () => console.log("App listening on port", port));
