import express from 'express'

import User from '../models/User'
import parseErrors from '../utils/parseErrors'

const router = express.Router()

router.post('/', (req, res) => {
  const { credentials } = req.body
  const user = new User({ email: credentials.email })
  user.setPassword(credentials.password)
  user
    .save()
    .then(user => res.json({ user: user.toAuthJSON() }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

export default router
