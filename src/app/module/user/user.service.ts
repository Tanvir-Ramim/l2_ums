import config from '../../config'

import { AcademicSemester } from '../academicSemester/academicSemester.modal'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'

import { TUser } from './user.interface'
import { UserModel } from './user.model'
import { generateStudentId } from './user.utills'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {}

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string)

  //set student role
  userData.role = 'student'

  // find academic semester info

  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  )

  //set manually generated id
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }
  userData.id = await generateStudentId(admissionSemester)

  // create a user
  const newUser = await UserModel.create(userData)

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id
    studentData.user = newUser._id //reference _id

    const newStudent = await Student.create(studentData)
    return newStudent
  }
}

export const UserServices = {
  createStudentIntoDB,
}
