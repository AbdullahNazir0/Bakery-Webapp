import express from 'express'
import contactController from '../controllers/contact.controllers.js'

const router = express.Router()

router.get('/contact-us', contactController)

export default router