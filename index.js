const express = require("express");
const app = express();
const pageRoutes = require("./page-routes");

app.use(pageRoutes);

app.listen(3000, () => console.log("Listening on http:/localhost:3000"));
