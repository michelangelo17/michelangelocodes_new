import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.GHOST_URL}/ghost/api/content/posts/`,
      {
        params: {
          key: process.env.GHOST_CONTENT_API_KEY,
          include: 'authors,tags',
          filter: 'visibility:public',
        },
      },
    )
    res.json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).send('An error occurred while fetching blog posts')
  }
})

export const blogApiRouter = router
