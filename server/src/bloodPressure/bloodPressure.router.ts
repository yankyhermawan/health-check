import express from 'express'
import BloodPressureHandler from './bloodPressure.handler'

const bloodPressureRouter = express.Router()
const bloodPressureHandler = new BloodPressureHandler()

bloodPressureRouter.get('/bloodpressure/:userId', bloodPressureHandler.getBloodPressuresHandler)
bloodPressureRouter.post('/bloodpressure/create', bloodPressureHandler.createBloodPressureHandler)
bloodPressureRouter.get('/bloodpressure/userdate', bloodPressureHandler.getBloodPressuresByUserIdDate)

export default bloodPressureRouter