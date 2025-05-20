import express from 'express'
import { AcademicSemesterController } from './academicSemester.controller'

const router = express.Router()

router.get(
  '/create-academic-semester',
  AcademicSemesterController.createAcademicSemester,
)

// router.get('/:studentId', StudentController.getSingleStudent);

export const AcademicSemesterRoute = router
