const express = require('express')
const authController = require('../controller/authController.js')
const router = express.Router()

/* routes */
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get("/user", authController.getCurrenUser) 


router.get("/todo", authController.getUserTodos)
router.post("/todo", authController.postUserTodo)
router.delete("/todo", authController.deleteUserTodo)
router.put("/todo", authController.doneTodo)

/* export */
module.exports = router