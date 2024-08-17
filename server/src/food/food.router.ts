import express from 'express'
import FoodHandler from './food.handler'

const foodRouter = express.Router()
const foodHandler = new FoodHandler()

foodRouter.get('/food/:userId', foodHandler.getFoodByUserId)
foodRouter.post('/food/create', foodHandler.createFood)
foodRouter.get('/food/userdate', foodHandler.getFoodByUserIdDate)

export default foodRouter