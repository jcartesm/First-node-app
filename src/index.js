const express = require("express");
const app = express()
const path = require("path");

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// midleware

// routes
app.use(require("./routes/index"));

// satic files
app.use(express.static(path.join(__dirname, "public")));

// listening server
app.listen(app.get("port"), () => {
    console.log("servidor escuchando puerto", app.get("port"));
});
