const User = require('../models/userModel.js')
const Todo = require('../models/todoModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

/* controllers */
exports.register = async (req, res) => {
    const newUser = req.body
    hashedPassword = await bcrypt.hash(newUser.password, 10)
    newUser.password = hashedPassword
    User.create(newUser)
        .then(res => {
            res.json('you registered!')
        }).catch(error => {
            if (error) res.json(['backend error', error])
        })
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await await User.findOne({ email })
    if (user) {
        const isVerified = await bcrypt.compare(password, user.password)
        if (isVerified) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
                expiresIn: process.env.JWT_EXPIRES_IN
            })
            res.json({
                message: "you logged in",
                token: token
            })
        } else {
            res.json({ message: 'wrong email or password' })
        }
    } else {
        res.json({ message: "couldn't find user" })
    }
}


exports.getCurrenUser = async (req, res) => {
    const token = req.headers.authorization
    if (!token || token === "") {
        res.json(undefined)
    } else {
        const VerifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const currentUser = await User.findById(VerifiedToken.id)
        currentUser.password = null
        res.json(currentUser)
    }
}

exports.postUserTodo = async (req, res) => {
    const userTodo = req.body
    if (userTodo.todo === "" || userTodo.todo.trim().length === 0) {
        res.status(204).json() // 204 = no content
    } else {
        await Todo.create(userTodo)
        res.status(201).json({ message: 'created' })
    }
}

exports.getUserTodos = async (req, res) => {
    const userID = req.headers.userid
    if (userID === undefined) {
        res.json(null)
    }
    const allUserTodos = await Todo.find({ userID: userID })
    res.json(allUserTodos)
}

exports.deleteUserTodo = async (req, res) => {
    const id = req.headers.todo_id
    await Todo.findOneAndDelete({ _id: id }).then(response => {
        if(response){
            res.status(200).json({message: "deleted"})
        } else {
            res.status(204) // not found
        }
    })
}

exports.doneTodo = (req, resp) => {
    const todo = req.body
     Todo.findOne({_id: todo._id}).then(res => {
        if(res.done === true){
            Todo.updateOne({_id: todo._id}, {done: false}).then(response => {
                if(response){
                    resp.status(200).json({message: "changed"})
                } else {
                    resp.status(204) // not found
                }
            })
        } else {
            Todo.updateOne({_id: todo._id}, {done: true}).then(response => {
                if(response){
                    resp.status(200).json({message: "changed"})
                } else {
                    resp.status(204) // not found
                }
            })
        }
    })
}

/* exports.undoneTodo =  (req, res) => {
    const todo = req.body
    Todo.updateOne({_id: todo._id}, {$set: {done: false}}).then(response => {
        if(response){
            res.status(200).json({message: "changed"})
        } else {
            res.status(204) // not found
        }
    })
} */

