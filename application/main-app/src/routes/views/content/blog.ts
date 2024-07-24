import { Response, Request } from 'express'
import { generateBlogHtml } from '../../../utils/generateBlogHtml'

export const renderBlog = async (req: Request, res: Response) => {
  try {
    // Extract CSRF token from the request
    const csrfToken = req.csrfToken()
    console.log('CSRF Token:', csrfToken)
    console.log('Cookies:', req.headers.cookie)

    // Generate the blog HTML content
    const html = await generateBlogHtml(csrfToken, req, res)

    // Send the generated HTML content directly in the response
    res.send(html)
  } catch (err) {
    console.error('Error rendering blog page:', err)
    res.status(500).send('An error occurred while rendering the blog page')
  }
}
