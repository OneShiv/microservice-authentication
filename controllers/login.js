import express from 'express'
import User from '../models/User'

export const loginHandler = () => {
  const router = express.Router()
  router.post('/v1/login', async (req, res) => {
    console.log(req)
    const reqUser = req.body
    const user = await User.create(reqUser)
    console.log("before", user)
    res.status(200).send({
      data: user._doc
    })
  })
  return router;
}