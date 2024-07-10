import request from 'supertest'
import express, { Application } from 'express'
import path from 'path'
import injectNonce from '../../../middleware/injectNonce'

describe('injectNonce Middleware', () => {
  let app: Application

  beforeAll(() => {
    app = express()
    app.use((_req, res, next) => {
      res.locals.nonce = 'test-nonce'
      next()
    })
    app.get('/', injectNonce(path.join(__dirname, '../../mocks/sample.html')))
  })

  test('should inject nonce into HTML', async () => {
    const response = await request(app).get('/')
    console.log('Response Status:', response.status) // Log the response status
    if (response.error) {
      console.error('Response Error:', response.error) // Log any response errors
    }

    const normalizedText = response.text.replace(/\s+/g, ' ') // Normalize the response text

    expect(response.status).toBe(200)
    expect(normalizedText).toContain(
      '<script nonce="test-nonce" src="script.js"></script>',
    )
    expect(normalizedText).toContain('<style nonce="test-nonce">')
    expect(normalizedText).toContain('body { background-color: #fff; }')
    expect(normalizedText).toContain('</style>')
  })
})
