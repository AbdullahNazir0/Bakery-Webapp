import express from 'express'
import itemsController from '../controllers/items.controllers.js'

const router = express.Router()

router.get('/items', itemsController)

export default router