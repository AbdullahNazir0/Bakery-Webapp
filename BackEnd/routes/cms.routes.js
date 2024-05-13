import express from 'express'
import cmsController from '../controllers/cms/cms.controllers.js'

const router = express.Router()

router.get('/', cmsController)

router.get('/', )