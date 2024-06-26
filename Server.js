const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 6000

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connected to MongoDB..`))
    .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))