import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import auth from './routes/auth'
import users from './routes/users'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGODB_URL)

app.use(bodyParser.json())

app.use('/api/auth', auth)
app.use('/api/users', users)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, () => console.log('Running on localhost:8080'))
