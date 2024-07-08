import { Router } from 'express'
import { apiContentRouter } from './content'

const router = Router()

router.use('/content', apiContentRouter)

export const apiRouter = router
