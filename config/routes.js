const express = require('express')

const router = express()
const todoController = require('../app/controllers/todoController')


const UsersController = require("../app/controllers/UsersController");
const { authenticateUser } = require("../app/middlewares/authentication");

//user authentication routes
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/account", UsersController.show);
router.delete("/logout", authenticateUser, UsersController.destroy);

//task routes
router.get('/todo', authenticateUser, todoController.list)
router.post('/todo', authenticateUser, todoController.create)
router.get('/todo/:id', authenticateUser, todoController.show)
router.delete('/todo/:id', authenticateUser, todoController.destroy)
router.put('/todo/:id', authenticateUser, todoController.update)

module.exports = router