import { Request, Response } from 'express'
import UserService from './user.service'
import { CreateUserInterface } from './user.interface'
import { formatAndSendResponse } from '../common/misc'

const userService = new UserService()

export default class UserHandler {

    async getUsers(req: Request, res: Response) {
        formatAndSendResponse(res, () => userService.getUsers())
    }

    async getUser(req: Request, res: Response) {
        const id = req.params.id
        formatAndSendResponse(res, () => userService.getUser(+id))
    }

    async createUser(req: Request, res: Response) {
        const body: CreateUserInterface = req.body
        formatAndSendResponse(res, () => userService.createUser(body))
    }

    async getUserActivityHandler(req: Request, res: Response) {
        const data = req.body
        formatAndSendResponse(res, () => userService.getUserActivityByDate(data))
    }
}