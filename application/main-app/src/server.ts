import express, { Application, Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import helmet from 'helmet'
import crypto from 'crypto'
import csurf from 'csurf'
import cookieParser from 'cookie-parser'
import winston from 'winston'
import routes from './routes'
import injectNonce from './middleware/injectNonce'

dotenv.config()

// Set up Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

const createApp = (): Application => {
  const app: Application = express()
  const port = process.env.PORT || 3000

  app.use(cookieParser())

  // Middleware to inject nonce
  app.use((_req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString('base64')
    next()
  })

  // Security headers
  app.use(
    helmet({
      contentSecurityPolicy: false, // Disable CSP
    }),
  )
  app.use(express.json({ type: ['json', 'application/csp-report'] }))

  // CSRF protection middleware with secure cookies
  app.use(
    csurf({
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        domain:
          process.env.NODE_ENV === 'production'
            ? process.env.DOMAIN
            : undefined,
      },
    }),
  )

  // Add CSRF token to response headers
  app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    res.setHeader('CSRF-Token', res.locals.csrfToken)
    next()
  })

  // Serve static files
  app.use(
    express.static(path.join(__dirname, 'public'), {
      setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css')
        }
      },
    }),
  )

  // Serve base HTML
  app.get('/', injectNonce(path.join(__dirname, 'public', 'base.html')))

  app.use(routes)

  return app
}

// Function to start the server
const startServer = (): {
  app: Application
  server: ReturnType<Application['listen']>
} => {
  const app = createApp()
  const port = process.env.PORT || 3000
  const server = app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`)
  })
  return { app, server }
}

if (require.main === module) {
  startServer()
}

export { createApp, startServer }
