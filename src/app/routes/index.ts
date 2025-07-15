import { Router } from 'express'
import { StudentRoutes } from '../module/student/student.route'
import { UserRoutes } from '../module/user/user.route'
import { AcademicSemesterRoute } from '../module/academicSemester/academicSemester.route'
import { AcademicFacultyRoute } from '../module/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoute } from '../module/academicDepartment/academicDepartment.route'

const router = Router()

const modulesRoutes = [
  {
    path: '/students',
    function: StudentRoutes,
  },
  {
    path: '/users',
    function: UserRoutes,
  },
  {
    path: '/academic-semesters',
    function: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    function: AcademicFacultyRoute,
  },
  {
    path: '/academic-department',
    function: AcademicDepartmentRoute,
  },
]

modulesRoutes.forEach(route => {
  router.use(route.path, route.function)
})

export default router
