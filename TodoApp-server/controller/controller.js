const User = require("../models/userModel.js");
const Todo = require("../models/todoModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/* controllers */
exports.register = async (req, res) => {
  const newUser = req.body;
  hashedPassword = await bcrypt.hash(newUser.password, 10);
  newUser.password = hashedPassword;
  User.create(newUser)
    .then((response) => {
      return res.status(201).json({
        message: `${newUser.email} is registered!`,
        data: response,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Something went wrong.",
      });
    });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User couldn't find." });
  const isVerified = await bcrypt.compare(password, user.password);
  if (!isVerified) return res.status(400).json({ message: "Wrong password." });
  const token = jwt.sign(
    { id: user._id, username: user.username, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  user.password = null; // for security
  const UserTodos = await Todo.find({ userID: user._id });
  return res.json({
    message: "You logged in!",
    token: token,
    user: user,
    todos: UserTodos,
  });
};

exports.getUserTodos = async (req, res) => {
  const token = req.headers.token
  const tokenData = await jwt.decode(token, process.env.JWT_SECRET_KEY)
  const userTodos = await Todo.find({userID: tokenData.id})
  return res.status(200).json(userTodos)
}


exports.postUserTodo = async (req, res) => {
  const userTodo = req.body;
  const newTodo = await Todo.create(userTodo);
  return res
    .status(201)
    .json({ message: "Todo is created.", newTodo: newTodo });
};

exports.deleteUserTodo = async (req, res) => {
  const todoId = req.params.todoId;
  await Todo.findOneAndDelete({ _id: todoId });
  return res.status(200).json({ message: "Todo is deleted." });
};

exports.updateUserTodo = (req, res) => {
  const todoId = req.params.todoId;
  Todo.findOne({ _id: todoId }).then(async (todo) => {
    if (!todo) return res.status(404).json({ message: "Todo not found." });
    if (todo.done === true) {
      await Todo.updateOne({ _id: todoId }, { done: false });
      return res.status(200).json({ message: "Your todo has been done." });
    } else {
      await Todo.updateOne({ _id: todo._id }, { done: true });
      return res.status(200).json({ message: "Your todo has been updated." });
    }
  });
};
