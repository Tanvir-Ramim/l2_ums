import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { AcademicFacultyService } from './academicFaculty.services'

const createAcademicFaculty = catchAsync(async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDD(
      req.body,
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
})

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyFromDD()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty retrieved successfully',
    data: result,
  })
})

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId: id } = req.params

  const result = await AcademicFacultyService.getSingleAcademicFacultyFromDD(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty retrieved successfully',
    data: result,
  })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await AcademicFacultyService.updateAcademicFacultyIntoDD(
    id,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty updated successfully',
    data: result,
  })
})

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
}
