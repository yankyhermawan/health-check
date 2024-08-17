import { formatAndSendResponse } from '../common/misc'
import { CreateExercise } from './exercise.interface'
import ExerciseService from './exercise.service'
import { Request, Response } from 'express'

const exerciseService = new ExerciseService()

export default class ExerciseHandler {

    async getExerciseByUserId(req: Request, res: Response) {
        const userId = req.params.userId
        formatAndSendResponse(res, () => exerciseService.getExerciseByUserId(+userId))
    }

    async createExerciseHandler(req: Request, res: Response) {
        const data: CreateExercise = req.body
        data.start_time = new Date(data.start_time)
        data.end_time = new Date(data.end_time)
        formatAndSendResponse(res, () => exerciseService.createExercise(data))
    }

    async getExerciseByDate(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => exerciseService.getExerciseByDate(data))
    }
}