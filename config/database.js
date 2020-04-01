const mongoose = require("mongoose");

setupDB = () => {
 mongoose
  .connect("mongodb://localhost:27017/oct-todo", {
   useNewUrlParser: true,
   useUnifiedTopology: true
  })
  .then(() => {
   console.log("connect to db");
  })
  .catch(err => {
   console.log(err);
  });
};

module.exports = setupDB;
