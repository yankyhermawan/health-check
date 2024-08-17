import moment from 'moment'
import { PrismaService } from '../prisma.service'
import { CreateBloodPressure } from './bloodPressure.interface'
import { userIdDate } from '../common/common.interface'

export default class BloodPressureService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getBloodPressuresByUserId(userId: number) {
        const response = await this.prismaService.blood_pressure_check.findMany({
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

    async createBloodPressure(data: CreateBloodPressure) {
        const response = await this.prismaService.blood_pressure_check.create({
            data
        })
        return {
            status: 201,
            response
        }
    }

    async getBloodPressureByUserIdDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).startOf('day') : moment().startOf('day')
        const endDate = moment(date).isValid() ? moment(date).endOf('day') : moment().endOf('day')
        const response = await this.prismaService.blood_pressure_check.findMany({
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