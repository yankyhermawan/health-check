import { Request, Response } from 'express'
import BloodPressureService from './bloodPressure.service'
import { CreateBloodPressure } from './bloodPressure.interface'
import { formatAndSendResponse } from '../common/misc'

const bloodPressurService = new BloodPressureService()

export default class BloodPressureHandler {
    async createBloodPressureHandler(req: Request, res: Response) {
        const data: CreateBloodPressure = req.body
        formatAndSendResponse(res, () => bloodPressurService.createBloodPressure(data))
    }

    async getBloodPressuresHandler(req: Request, res: Response) {
        const userId = req.params.userId
        formatAndSendResponse(res, () => bloodPressurService.getBloodPressuresByUserId(+userId))
    }

    async getBloodPressuresByUserIdDate(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => bloodPressurService.getBloodPressureByUserIdDate(data))
    }
}