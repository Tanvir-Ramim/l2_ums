
import catchAsync from '../../utils/catchAsync'

const createAcademicSemester = catchAsync(async (req, res, next) => {
  try {
    // const { password, student: studentData } = req.body
    // const zodParsedData = studentValidationSchema.parse(studentData);
    //   const result = await UserServices.createStudentIntoDB(password, studentData)
    // sendResponse(res, {
    //   statusCode: status.OK,
    //   success: true,
    //   message: 'Student created successfully',
    //   data: result,
    // })
  } catch (err) {
    next(err)
  }
})

export const AcademicSemesterController = {
  createAcademicSemester,
}
