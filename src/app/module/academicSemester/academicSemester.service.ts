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

const getAllAcademicSemesterFromDD = async () => {
  const result = await AcademicSemester.find({}).sort({ createdAt: -1 })
  return result
}

const getSingleAcademicSemesterFromDD = async (id: string) => {
  const result = await AcademicSemester.findById(id)
  return result
}

const updateAcademicSemesterIntoDD = async (
  id: string,
  payLoad: Partial<TAcademicSemester>,
) => {
  const result = await AcademicSemester.findByIdAndUpdate(id, payLoad, {
    new: true,
  })
  return result
}

export const AcademicSemesterService = {
  createAcademicSemesterIntoDD,
  getAllAcademicSemesterFromDD,
  getSingleAcademicSemesterFromDD,
  updateAcademicSemesterIntoDD,
}
