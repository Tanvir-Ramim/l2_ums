import express from 'express';
import { StudentControllers } from './student.controller';


const router = express.Router();



router.get('/get', StudentControllers.getAllStudents);

// router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = router;