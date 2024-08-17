import moment from 'moment'
import { userIdDate } from '../common/common.interface'
import { PrismaService } from '../prisma.service'
import { CreateUserInterface } from './user.interface'

export default class UserService {
    private readonly prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }

    async getUsers() {
        const response = await this.prismaService.user.findMany()
        const statusCode = response ? 200 : 404
        return {
            status: statusCode,
            response
        }
    }

    async getUser(id: number) {
        const response = await this.prismaService.user.findUnique({
            where: {
                id
            },
            include: {
                blood_pressure_checks: true,
                foods: true,
                sleeps: true,
                supplement_intakes: true,
                exercises: true
            }
        })

        if (response) {
            return {
                status: 200,
                response
            }
        }

        return {
            status: 404,
            response: 'User Not Found'
        }
    }

    async createUser(data: CreateUserInterface) {
        const response = await this.prismaService.user.create({
            data
        })
        return {
            status: 201,
            response
        }
    }

    async getUserActivityByDate(data: userIdDate) {
        const { userId, date } = data
        const startDate = moment(date).isValid() ? moment(date).startOf('day').toDate() : moment().startOf('day').toDate()
        const endDate = moment(date).isValid() ? moment(date).endOf('day').toDate() : moment().endOf('day').toDate()
        const oneDayBeforeStartDate = moment(startDate).subtract(1, 'day').startOf('day').toDate()
        
        const response = await this.prismaService.user.findFirst({
            where: {
                id: userId
            },
            include: {
                blood_pressure_checks: {
                    where: {
                        created_at: {
                            gte: startDate,
                            lte: endDate
                        }
                    }
                },
                exercises: {
                    where: {
                        start_time: { gte: startDate },
                        end_time: { lte: endDate }
                    }
                },
                foods: {
                    where: {
                        created_at: {
                            gte: startDate,
                            lte: endDate
                        }
                    }
                },
                supplement_intakes: {
                    where: {
                        created_at: {
                            gte: startDate,
                            lte: endDate
                        }
                    }
                },
                sleeps: {
                    where: {
                        start_time: { gte: oneDayBeforeStartDate },
                        end_time: { lte: endDate }
                    }
                }
            }
        })

        return {
            status: 200,
            response
        }
    }
}