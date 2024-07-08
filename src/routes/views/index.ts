import { Router } from 'express'
import { renderHome } from './content/home'
import { renderAbout } from './content/about'
import { renderBase } from './base'

const router = Router()

router.get('/', renderBase)
router.get('/content/home', renderHome)
router.get('/content/about', renderAbout)

export const viewRouter = router
