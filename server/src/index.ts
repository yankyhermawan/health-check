import express from 'express'
import cors from 'cors'
import userRouter from './user/user.router'
import bloodPressureRouter from './bloodPressure/bloodPressure.router'
import foodRouter from './food/food.router'
import sleepRouter from './sleep/sleep.router'
import supplementRouter from './supplement/supplement.router'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(bloodPressureRouter)
app.use(foodRouter)
app.use(sleepRouter)
app.use(supplementRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})