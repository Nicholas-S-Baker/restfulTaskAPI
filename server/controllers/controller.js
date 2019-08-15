const Task = require("../models/model");

exports.index = function(req, res){
  console.log("*********** IN INDEX")
  Task.find()
  .then(tasks => res.json(tasks))
  .catch(err => res.json(err));
}

exports.show = function(req, res){
  Task.findOne({_id: req.params.id})
    .then(singleTask => res.json(singleTask))
    .catch(err => res.json(err));
}

exports.create = function(req, res){
  console.log("***************** IN CREATE")
  console.log(req.body)
  Task.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.json(err));
}

exports.update = function(req, res){
  Task.updateOne({_id: req.params.id}, {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  })
    .then(updated => res.redirect('/'))//Needs to be more here? But how like above???
    .catch(err => res.json(err));
}

exports.delete = function(req, res){
  console.log(req.params.id)
  Task.deleteOne({_id: req.params.id})
    .then(deleted => res.redirect("/"))
    .catch(err => res.json(err));
}