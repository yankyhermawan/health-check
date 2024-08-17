import FoodService from './food.service'
import { Request, Response } from 'express'
import { formatAndSendResponse } from '../common/misc'

const foodService = new FoodService()

export default class FoodHandler {
    async getFoodByUserId(req: Request, res: Response) {
        const userId = req.params.userId
        formatAndSendResponse(res, () => foodService.getFoodsByUserId(+userId))
    }

    async createFood(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => foodService.createFood(data))
    }

    async getFoodByUserIdDate(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => foodService.getFoodByUserIdDate(data))
    }
}