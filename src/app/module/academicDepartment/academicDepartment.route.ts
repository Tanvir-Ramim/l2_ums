import express from 'express'

import validateRequest from '../../middlwares/validRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validations'
import { AcademicDepartmentController } from './academicDepartment.controller'

const router = express.Router()

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
)

router.get(
  '/:departmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
)

router.get('/', AcademicDepartmentController.getAllAcademicDepartments)

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
)

// router.get('/:studentId', StudentController.getSingleStudent);

export const AcademicDepartmentRoute = router
