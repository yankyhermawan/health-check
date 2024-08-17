import express from 'express'
import ExerciseHandler from './exercise.handler'

const exerciseRouter = express.Router()
const exerciseHandler = new ExerciseHandler()

exerciseRouter.get('/exercise/:userId', exerciseHandler.getExerciseByUserId)
exerciseRouter.post('/exercise/create', exerciseHandler.createExerciseHandler)
exerciseRouter.get('/exercise/userdate', exerciseHandler.getExerciseByDate)

export default exerciseRouter