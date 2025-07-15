import { TAcademicFaculty } from './academicFaculty.interface'
import { AcademicFacultyModel } from './academicFaculty.model'

const createAcademicFacultyIntoDD = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payLoad)
  return result
}

const getAllAcademicFacultyFromDD = async () => {
  const result = await AcademicFacultyModel.find({}).sort({ createdAt: -1 })
  return result
}

const getSingleAcademicFacultyFromDD = async (id: string) => {
  console.log(id)
  const result = await AcademicFacultyModel.findById(id)

  return result
}

const updateAcademicFacultyIntoDD = async (
  id: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  })
  return result
}

export const AcademicFacultyService = {
  createAcademicFacultyIntoDD,
  getAllAcademicFacultyFromDD,
  getSingleAcademicFacultyFromDD,
  updateAcademicFacultyIntoDD,
}
