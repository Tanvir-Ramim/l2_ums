import express from 'express'

import validateRequest from '../../middlwares/validRequest'
import { academicFacultyValidation } from './academicFaculty.validation'
import { AcademicFacultyController } from './academicFaculty.controller'

const router = express.Router()

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.academicFacultyValidationSchema,
  ),
  AcademicFacultyController.createAcademicFaculty,
)


router.get("/:facultyId", AcademicFacultyController.getSingleAcademicFaculty)

router.get(
  '/',
  AcademicFacultyController.getAllAcademicFaculty,
)

router.patch(
  '/:facultyId', validateRequest(
    academicFacultyValidation.academicFacultyValidationSchema,
  ),AcademicFacultyController.updateAcademicFaculty  )

// router.get('/:studentId', StudentController.getSingleStudent);

export const AcademicFacultyRoute = router
