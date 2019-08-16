module.exports = function(app){
  const controller = require("../controllers/controller");
  app.get("/api/tasks", controller.index);
  app.post("/api/tasks/new", controller.create);
  app.get("/api/tasks/:id", controller.show);
  app.put("/api/tasks/:id", controller.update);
  app.delete("/api/tasks/:id", controller.delete);
}