import express from 'express'
import itemController from '../controllers/item.controllers.js'
import itemsController from '../controllers/items.controllers.js'

const router = express.Router()

router.get('/', itemsController)

router.get('/:item', itemController)

export default router