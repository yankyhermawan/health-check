import SleepService from './sleep.service'
import { Request, Response } from 'express'
import { CreateSleep } from './sleep.interface'
import { formatAndSendResponse } from '../common/misc'
import { userIdDate } from '../common/common.interface'

const sleepService = new SleepService()

export default class SleepHandler {
    async getSleep(req: Request, res: Response) {
        const userId = req.params.userId
        formatAndSendResponse(res, () => sleepService.getSleepByUserId(+userId))
    }

    async createSleep(req: Request, res: Response) {
        const data: CreateSleep = req.body
        data.start_time = new Date(data.start_time)
        data.end_time = new Date(data.end_time)
        formatAndSendResponse(res, () => sleepService.createSleep(data))
    }

    async getSleepByUserIdDate(req: Request, res: Response) {
        const data: userIdDate = req.body
        formatAndSendResponse(res, () => sleepService.getSleepByUserIdDate(data))
    }
}