import request from 'supertest'
import { Application } from 'express'
import { startServer } from '../../server' // Adjust the import path as needed

describe('Server', () => {
  let app: Application
  let server: ReturnType<Application['listen']>
  let csrfToken: string
  let cookies: string[]

  beforeAll(async () => {
    const serverInstance = startServer()
    app = serverInstance.app
    server = serverInstance.server

    // Fetch CSRF token and cookies
    const response = await request(app).get('/')
    console.log('Response Headers:', response.headers) // Log response headers for debugging

    const setCookieHeader = response.headers['set-cookie']
    cookies = Array.isArray(setCookieHeader)
      ? setCookieHeader
      : [setCookieHeader]

    csrfToken = response.headers['csrf-token']

    if (!csrfToken) {
      throw new Error('CSRF token not found in response headers')
    }
  })

  afterAll((done) => {
    server.close(done)
  })

  test('GET / should return 200 and serve the base.html file', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toContain('<!DOCTYPE html>')
  })

  test('POST /csp-violation-report-endpoint should log CSP violation and return 204', async () => {
    const cspViolation = {
      'csp-report': {
        'document-uri': 'http://example.com',
        referrer: '',
        'violated-directive': "script-src 'self' 'nonce-abc123'",
        'original-policy':
          "default-src 'none'; script-src 'self' 'nonce-abc123'; object-src 'none';",
        'blocked-uri': 'http://example.com/js/test.js',
      },
    }

    const response = await request(app)
      .post('/csp-violation-report-endpoint')
      .set('Cookie', cookies.join('; '))
      .set('Content-Type', 'application/csp-report')
      .set('CSRF-Token', csrfToken)
      .send(JSON.stringify(cspViolation)) // Serialize the payload correctly

    expect(response.status).toBe(204)
  })

  test('Static files should have appropriate headers', async () => {
    const response = await request(app).get('/styles.css')
    expect(response.header['content-type']).toBe('text/css')
  })
})
