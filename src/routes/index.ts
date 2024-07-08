import { Router } from 'express'
import { viewRouter } from './views'
import { apiRouter } from './api'

const router = Router()

router.use('/', viewRouter)
router.use('/api', apiRouter)

export default router
