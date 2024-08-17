import { PrismaService } from '../prisma.service'
import { CreateSupplement } from './supplement.interface'
import { userIdDate } from '../common/common.interface'
import moment from 'moment'

export default class SupplementService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getSupplementByUserId(userId: number) {
        const response = await this.prismaService.supplement_intake.findMany({
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

    async createSupplement(data: CreateSupplement) {
        const response = await this.prismaService.supplement_intake.create({
            data
        })
        return {
            status: 201,
            response
        }
    }

    async getSupplementByUserIdDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).startOf('day') : moment().startOf('day')
        const endDate = moment(date).isValid() ? moment(date).endOf('day') : moment().endOf('day')
        const response = await this.prismaService.supplement_intake.findMany({
            where: {
                userId,
                is_taken: true,
                created_at: {
                    gte: startDate.toDate(),
                    lte: endDate.toDate()
                }
            }
        })
        const statusCode = response ? 200 : 404
        return {
            status: statusCode,
            response
        }
    }
}