import express from 'express'
import { loginHandler } from '../controllers/login'

const router = express.Router();


router.use(loginHandler())


export const getRouter = () => router