const express = require("express");
const exphbs = require("express-handlebars");
//const burger = require("./models/burger")//which in turn requires mysql, chain
const burgers_controllers = require("./controllers/burgers_controller")

const app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());

app.use("/static", express.static("public"))


app.get("/", function (req, res) {
  res.render("index");
});

app.use("/api", burgers_controllers);

app.listen(PORT, function() {
   console.log("Server listening on: http://localhost:" + PORT);
});