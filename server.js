const express = require("express");
const passport = require("passport")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "dog"
}));
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/game-it");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
