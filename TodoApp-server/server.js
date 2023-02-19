const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/userRoutes.js')
const mongoose = require('mongoose')

/* dotenv */
require('dotenv').config()

/* create express */
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', userRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

/* mongodb connection */
mongoose.set('strictQuery', false); /* for warning */

const db = mongoose.connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the db!");
    }).catch((err) => {
        console.log(err)
    })


