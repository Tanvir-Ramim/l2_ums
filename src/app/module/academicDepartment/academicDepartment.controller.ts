import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { AcademicDepartmentService } from './academicDepartment.services'

const createAcademicDepartment = catchAsync(async (req, res, next) => {
  try {
    const result =
      await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
})

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllAcademicDepartmentFromDD()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Departments retrieved successfully',
    data: result,
  })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId: id } = req.params

  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDD(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department retrieved successfully',
    data: result,
  })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId: id } = req.params

  const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDD(
    id,
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department updated successfully',
    data: result,
  })
})

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}
