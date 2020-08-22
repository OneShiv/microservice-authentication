import express from 'express'

export const loginHandler = () => {
  const router = express.Router()

  router.get('/v1/login', (req, res) => {
    console.log("In login")
    res.send({
      msg: "login"
    })
  })
  return router;
}