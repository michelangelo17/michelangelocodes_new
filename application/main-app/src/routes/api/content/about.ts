import { Router } from 'express'
import pool from '../../../db/pool'

const router = Router()

router.get('/', async (req, res) => {
  console.log('API /about route hit')
  try {
    const result = await pool.query(
      'SELECT paragraph FROM about ORDER BY id ASC',
    )
    console.log('Database query result:', result.rows)
    const paragraphs = result.rows
      .map((row) => `<p class="text-primary mb-4">${row.paragraph}</p>`)
      .join('')
    res.send(paragraphs)
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .send('An error occurred while trying to fetch the about page content')
  }
})

export const aboutApiRouter = router
