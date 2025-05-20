import { Router } from 'express'
import { StudentRoutes } from '../module/student/student.route'
import { UserRoutes } from '../module/user/user.route'

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
]


modulesRoutes.forEach((route) => {
  router.use(route.path, route.function)
})



export default router


