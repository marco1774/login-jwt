const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// import routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
// MongoDB
const mongoDB = require("./mongoose/mongoConnect");

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoDB();

app.get("/", (req, res) => {
  console.log("server is actived");
  res.send("server is actived");
});

app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
