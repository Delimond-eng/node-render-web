require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./routes");
const path = require("path");
const app = express();

/*HTML VIEWS PATH*/
app.set("views", path.join(__dirname, "views"));

/*SET PUBLIC FOLDER PATH*/
app.use("/vendor", express.static(path.join(__dirname, "public/vendor")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/nodes", express.static(path.join(__dirname, "node_modules")));

/*SET THE VIEW ENGINE TO ejs*/
app.use(expressLayouts);
app.set("view engine", "ejs");

/*SETUP APP VIEWS ROUTES*/
app.use("/", routes);

const port = process.env.APP_PORT;

/*APP RUNNIG */
app.listen(port, () => {
  console.log("app runnig on=> localhost:" + port);
});
