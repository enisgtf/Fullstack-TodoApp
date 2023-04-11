const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();
const isAuthorized = require("../middlewares/auth-check.js");

/* routes */
router.post("/register", controller.register);
router.post("/login", controller.login);

router.get("/todo", isAuthorized, controller.getUserTodos)
router.post("/todo", isAuthorized, controller.postUserTodo);
router.delete("/todo/:todoId", isAuthorized, controller.deleteUserTodo);
router.put("/todo/:todoId", isAuthorized, controller.updateUserTodo);

/* export */
module.exports = router;
