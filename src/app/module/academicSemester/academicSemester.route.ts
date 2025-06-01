import express from 'express'
import { AcademicSemesterController } from './academicSemester.controller'
import validateRequest from '../../middlwares/validRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
)

// router.get('/:studentId', StudentController.getSingleStudent);

export const AcademicSemesterRoute = router
