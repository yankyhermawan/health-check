import express from 'express'
import SupplementHandler from './supplement.handler'

const supplementRouter = express.Router()
const supplementHandler = new SupplementHandler()

supplementRouter.get('/supplement/:userId', supplementHandler.getSupplementHandler)
supplementRouter.post('/supplement/create', supplementHandler.createSupplementHandler)

export default supplementRouter