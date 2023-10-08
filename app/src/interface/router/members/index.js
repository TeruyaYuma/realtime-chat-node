import { Router } from 'express'
import actions from '../../actions/index.js'

const router = Router()
const { membersActions } = actions

router.get('/', membersActions)

export default router