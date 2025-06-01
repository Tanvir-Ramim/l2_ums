import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.modal'

const createAcademicSemesterIntoDD = async (payLoad: TAcademicSemester) => {
  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
  }
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Spring: '03',
  }

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid semester code')
  }

  const result = await AcademicSemester.create(payLoad)
  return result
}

export const AcademicSemesterService = {
  createAcademicSemesterIntoDD,
}
