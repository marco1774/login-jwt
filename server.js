const express = require("express");
const app = express();
// import routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
// MongoDB
const mongoDB = require("./mongoose/mongoConnect");

const PORT = process.env.PORT || 5000;

mongoDB();

app.get("/", (req, res) => {
  console.log("server is actived");
  res.send("server is actived");
});

app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
