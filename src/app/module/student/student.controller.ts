import { StudentServices } from './student.service'
import { Request, Response } from 'express'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const result = await StudentServices.createStudentIntoDB(studentData)

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result, 
    })
  } catch (error) {
    console.error(error)
  }
}

export const StudentControllers = {
  createStudent,
}
