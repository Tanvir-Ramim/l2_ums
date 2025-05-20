/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, RequestHandler } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import status from 'http-status'
import catchAsync from '../../utils/catchAsync'


const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB()

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  })
})

const getSingleStudent: RequestHandler = catchAsync(async (req, res, ) => {
  const { studentId } = req.params

  const result = await StudentServices.getSingleStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  })
})

const deleteStudent: RequestHandler = catchAsync(async (req, res, ) => {
  const { studentId } = req.params

  const result = await StudentServices.deleteStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  })
})

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
