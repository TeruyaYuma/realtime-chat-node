import { Router } from 'express'
import actions from '../../actions/index.js'

const router = Router()
const { rootActions } = actions
router.get('/', rootActions)

export default router
