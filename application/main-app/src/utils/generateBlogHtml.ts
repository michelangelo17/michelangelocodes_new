import axios from 'axios'
import { Request, Response } from 'express'
// import { generateDisqusScript } from './generateDisqusScript'

export const generateBlogHtml = async (
  csrfToken: string,
  req: Request,
  res: Response,
): Promise<string> => {
  try {
    // Call the internal API route with CSRF token
    const response = await axios.get(
      `${req.protocol}://${req.get('host')}/api/content/blog`,
      {
        headers: {
          'X-CSRF-Token': csrfToken,
          Cookie: req.headers.cookie, // Pass cookies to maintain session
        },
      },
    )

    const posts = response.data.posts
    let blogContent = ''

    posts.forEach((post: any) => {
      blogContent += `
        <div>
          <h2>${post.title}</h2>
          ${post.html}
        </div>
      `
    })

    // const disqusScript = generateDisqusScript(
    //   res.locals.nonce,
    //   process.env.YOUR_DISQUS_SHORTNAME || '',
    // )

    const html = `
            <main id="content" class="prose">
              ${blogContent}
            </main>

    `

    return html
  } catch (err) {
    console.error('Error generating blog HTML:', err)
    throw err
  }
}
