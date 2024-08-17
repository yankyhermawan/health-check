import moment from 'moment'
import { PrismaService } from '../prisma.service'
import { CreateExercise } from './exercise.interface'
import { userIdDate } from '../common/common.interface'

export default class ExerciseService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getExerciseByUserId(userId: number) {
        const response = await this.prismaService.exercise.findMany({
            where: {
                userId
            }
        })

        const statusCode = response ? 200 : 404
        return {
            status: statusCode,
            response
        }
    }

    async createExercise(data: CreateExercise) {
        const response = await this.prismaService.exercise.create({
            data
        })

        return {
            status: 201,
            response
        }
    }
    
    async getExerciseByDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).startOf('day') : moment().startOf('day')
        const endDate = moment(date).isValid() ? moment(date).endOf('day') : moment().endOf('day')
        const response = await this.prismaService.exercise.findMany({
            where: {
                start_time: {
                    gte: startDate.toDate(),
                    lte: endDate.toDate()
                },
                userId
            }
        })

        const statusCode = response ? 200 : 404
        return {
            status: statusCode,
            response
        }
    }
}