import { Router } from 'express'
import rootRouter from "./root/index.js"
import membersRouter from "./members/index.js"

const router = Router()

router.use('/', rootRouter)
router.use('/members', membersRouter)
  
export default router