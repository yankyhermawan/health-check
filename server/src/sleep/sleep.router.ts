import express from 'express'
import SleepHandler from './sleep.handler'

const sleepRouter = express.Router()
const sleepHandler = new SleepHandler()

sleepRouter.get('/sleep/:userId', sleepHandler.getSleep)
sleepRouter.post('/sleep/create', sleepHandler.createSleep)
sleepRouter.get('/sleep/userdate', sleepHandler.getSleepByUserIdDate)

export default sleepRouter