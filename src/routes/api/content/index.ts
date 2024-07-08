import { Router } from 'express'
import { aboutApiRouter } from './about'

const router = Router()

router.use('/about', aboutApiRouter)

export const apiContentRouter = router
