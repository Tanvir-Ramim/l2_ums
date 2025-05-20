/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/module/student/student.route'
import { UserRoutes } from './app/module/user/user.route'
import globalErrorHandler from './app/middlwares/globalErrorhandler'
import notFound from './app/middlwares/notFound'
import router from './app/routes'

const app: Application = express()

//parsers

app.use(express.json())

app.use(cors())

//application routes

app.use('/api/v1', router )


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// Error handling middleware should be placed after all routes
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next)
})

//not found route
app.use(notFound)

export default app
