const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://localhost/restful_task", {
  useNewUrlParser: true,
});

require("./server/routes/route")(app);
app.listen(8000, () => console.log("PORT 8000 - RESTFUL TASK"));