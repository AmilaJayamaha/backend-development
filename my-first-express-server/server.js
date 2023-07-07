var express =  require("express");
var app = express();

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/", (req, res) => {
  //Some code to retrieve data
  res.send("Getting some data");
});

app.post('/', (req, res) => {
  //Some code to create data
  res.send("Posting some data");
});


app.put('/', (req, res) => {
  //Some code to update data
  res.send("Putting some data");
});


app.delete('/', (req, res) => {
  //Some code to delete data
  res.send("Deleting some data");
});