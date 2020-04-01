const Todo = require('../models/todo')

//listing all tasks
module.exports.list = (req, res) => {
  Todo.find()
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.json(err);
    });
};

//creating a task
module.exports.create = (req, res) => {
  const body = req.body;
  const todo = new Todo(body);
  todo.save()
    .then(todo => {
      if (todo) {
        res.json(todo);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//getting a  perticuler task
module.exports.show = (req, res) => {
  const id = req.params.id;
  Todo.findById(id)
    .then(todo => {
      if (todo) {
        res.json(todo);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//deleting task
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then(todo => {
      if (todo) {
        res.json(todo);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//updating task
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body)
  Todo.findByIdAndUpdate(id, body)
    .then(todo => {
      if (todo) {
        res.json(todo);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
