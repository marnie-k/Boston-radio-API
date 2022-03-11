const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");
const {
  getAllStations,
  getStationById,
  saveNewStation,
} = require("./controllers/stations");
const error = require("./controllers/error");

const app = express();

app.use(express.static("client/build"));
app.use(cors());

app.get("/api/stations", getAllStations);
app.get("/api/stations/:id", getStationById);
app.post("/api/", bodyParser.json(), saveNewStation);

app.all("*", (request, response) =>
  response.sendFile(path.resolve(__dirname, "client/build", "index.html"))
);

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on port 1337");
});
