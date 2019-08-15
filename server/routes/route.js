module.exports = function(app){
  const controller = require("../controllers/controller");
  app.get("/", controller.index);
  app.get("/api/tasks/:id", controller.show);
  app.post("/api/tasks", controller.create);
  app.put("/api/tasks/:id", controller.update);
  app.delete("/api/tasks/:id", controller.delete);
}