import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import helmet from 'helmet'
import crypto from 'crypto'
import routes from './routes'
import injectNonce from './middleware/injectNonce'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use((_req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString('base64')
  next()
})

// Example of a known inline style hash

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://fonts.googleapis.com',
        'https://cdnjs.cloudflare.com',
        (_req, res) => `'nonce-${(res as express.Response).locals.nonce}'`,
      ],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      scriptSrc: [
        "'self'",
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js',
        'https://unpkg.com/htmx.org@1.6.1/dist/htmx.min.js',
        (_req, res) => `'nonce-${(res as express.Response).locals.nonce}'`,
      ],
      scriptSrcElem: [
        "'self'",
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js',
        'https://unpkg.com/htmx.org@1.6.1/dist/htmx.min.js',
        (_req, res) => `'nonce-${(res as express.Response).locals.nonce}'`,
      ],
      styleSrcElem: [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://fonts.googleapis.com',
        'https://cdnjs.cloudflare.com',
        (_req, res) => `'nonce-${(res as express.Response).locals.nonce}'`,
      ],
      reportUri: '/csp-violation-report-endpoint',
    },
  }),
)

app.use(express.json({ type: ['json', 'application/csp-report'] }))

app.post('/csp-violation-report-endpoint', (req, res) => {
  console.log('CSP Violation: ', req.body)
  res.status(204).end()
})

app.use(
  express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css')
      }
    },
  }),
)

app.get('/', injectNonce(path.join(__dirname, 'public', 'base.html')))

app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
