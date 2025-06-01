import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { UserModel } from './user.model'

const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean()

  return lastStudent?.id ? lastStudent.id : undefined
}

export const generateStudentId = async (payLoad: TAcademicSemester) => {
  let currentId = (0).toString()
  const lastStudentId = await findLastStudentId()
  const lastStudentSemesterCode = lastStudentId?.slice(4, 6)
  const lastStudentYear = lastStudentId?.slice(0, 4)
  const currentSemesterCode = payLoad.code
  const currentYear = payLoad.year

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.slice(6, 10)
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')

  incrementId = `${payLoad?.year}${payLoad?.code}${incrementId}`

  return incrementId
}
