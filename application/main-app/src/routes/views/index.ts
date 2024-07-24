import { Router } from 'express'
import { renderHome } from './content/home'
import { renderAbout } from './content/about'
import { renderBase } from './base'
import { renderContact } from './content/contact'
import { renderBlog } from './content/blog'

const router = Router()

router.get('/', renderBase)
router.get('/content/home', renderHome)
router.get('/content/about', renderAbout)
router.get('/content/contact', renderContact)
router.get('/content/blog', renderBlog)

export const viewRouter = router
