import { userIdDate } from '../common/common.interface'
import { PrismaService } from '../prisma.service'
import { CreateFood } from './food.interface'
import moment from 'moment'

export default class FoodService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getFoodsByUserId(userId: number) {
        const response = await this.prismaService.food.findMany({
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

    async createFood(data: CreateFood) {
        const response = await this.prismaService.food.create({
            data
        })
        return {
            status: 201,
            response
        }
    }

    async getFoodByUserIdDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).startOf('day') : moment().startOf('day')
        const endDate = moment(date).isValid() ? moment(date).endOf('day') : moment().endOf('day')
        const response = await this.prismaService.food.findMany({
            where: {
                created_at: {
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