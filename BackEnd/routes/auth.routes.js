import express from 'express'
import authController from '../controllers/auth.controllers.js'

const router = express.Router()

router.get('/auth', authController)

export default router