import { PrismaService } from '../prisma.service'
import { CreateSleep } from './sleep.interface'
import { userIdDate } from '../common/common.interface'
import moment from 'moment'

export default class SleepService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getSleepByUserId(userId: number) {
        const response = await this.prismaService.sleep.findMany({
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

    async createSleep(data: CreateSleep) {
        const response = await this.prismaService.sleep.create({
            data
        })
        return {
            status: 201,
            response
        }
    }

    async getSleepByUserIdDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).subtract(1, 'day').startOf('day') : moment().subtract(1, 'day').startOf('day')
        const endDate = moment(date).isValid() ? moment(date).endOf('day') : moment().endOf('day')
        const response = await this.prismaService.sleep.findMany({
            where: {
                userId,
                start_time: { gte: startDate.toDate() },
                end_time: { lte: endDate.toDate() }
            }
        })
        const statusCode = response ? 200 : 404
        return {
            status: statusCode,
            response
        }
    }
}