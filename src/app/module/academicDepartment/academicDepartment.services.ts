import { TAcademicDepartment } from "./academicDepartment.interface"
import { AcademicDepartmentModel } from "./academicDepartment.modal"


const createAcademicDepartmentIntoDB = async (payLoad: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payLoad)
  return result
}

const getAllAcademicDepartmentFromDD = async () => {
  const result = await AcademicDepartmentModel.find({}).sort({ createdAt: -1 })
  return result
}

const getSingleAcademicDepartmentFromDD = async (id: string) => {
  const result = await AcademicDepartmentModel.findById(id)

  return result
}

const updateAcademicDepartmentIntoDD = async (
  id: string,
  payLoad: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id, payLoad, {
    new: true,
  })
  return result
}

export const AcademicDepartmentService = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDD,
  getSingleAcademicDepartmentFromDD,
  updateAcademicDepartmentIntoDD,
}
