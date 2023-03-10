const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    },
    _id: {
        type: String,
    }
})

const Todo = mongoose.model('Todo', todoSchema)


module.exports = Todo