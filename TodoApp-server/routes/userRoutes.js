const express = require('express')
const authController = require('../controller/authController.js')
const router = express.Router()

/* routes */
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get("/user", authController.getCurrenUser) 
router.post("/todo", authController.postUserTodo)
router.get("/todo", authController.getUserTodos)




/* export */
module.exports = router