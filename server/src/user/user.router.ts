import express from 'express'
import UserHandler from './user.handler'

const userRouter = express.Router()
const userHandler = new UserHandler()

userRouter.get('/users', userHandler.getUsers)
userRouter.get('/user/:id', userHandler.getUser)
userRouter.post('/user', userHandler.createUser)
userRouter.get('/getuser/activity', userHandler.getUserActivityHandler)

export default userRouter