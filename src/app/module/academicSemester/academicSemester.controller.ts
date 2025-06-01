import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AcademicSemesterService } from './academicSemester.service'
import httpStatus from 'http-status'
const createAcademicSemester = catchAsync(async (req, res, next) => {
  try {

    const result = await AcademicSemesterService.createAcademicSemesterIntoDD(
      req.body,
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
})

export const AcademicSemesterController = {
  createAcademicSemester,
}
