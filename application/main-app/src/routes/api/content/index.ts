import { Router } from 'express'
import { blogApiRouter } from './blog'

const router = Router()

router.use('/blog', blogApiRouter)

export const apiContentRouter = router
