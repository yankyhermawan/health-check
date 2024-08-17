import { CreateSupplement } from './supplement.interface'
import SupplementService from './supplement.service'
import { Request, Response } from 'express'
import { formatAndSendResponse } from '../common/misc'

const supplementService = new SupplementService()

export default class SupplementHandler {
    async getSupplementHandler(req: Request, res: Response) {
        const userId = req.params.userId
        formatAndSendResponse(res, () => supplementService.getSupplementByUserId(+userId))
    }

    async createSupplementHandler(req: Request, res: Response) {
        const data: CreateSupplement = req.body
        formatAndSendResponse(res, () => supplementService.createSupplement(data))
    }

    async getSupplementByUserIdDateHandler(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => supplementService.getSupplementByUserIdDate(data))
    }
}