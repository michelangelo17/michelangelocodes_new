import request from 'supertest'
import express, { Application } from 'express'
import { viewRouter } from '../../../../routes/views'
import { renderBase } from '../../../../routes/views/base'
import { renderHome } from '../../../../routes/views/content/home'
import { renderAbout } from '../../../../routes/views/content/about'

// Mock the render functions
jest.mock('../../../../routes/views/base', () => ({
  renderBase: jest.fn((_req, res) => res.status(200).send('Base')),
}))
jest.mock('../../../../routes/views/content/home', () => ({
  renderHome: jest.fn((_req, res) => res.status(200).send('Home')),
}))
jest.mock('../../../../routes/views/content/about', () => ({
  renderAbout: jest.fn((_req, res) => res.status(200).send('About')),
}))

let app: Application

beforeAll(() => {
  app = express()
  app.use(viewRouter)
})

afterAll(() => {
  jest.resetAllMocks()
})

describe('viewRouter', () => {
  it('should call renderBase on GET /', async () => {
    await request(app).get('/').expect(200, 'Base') // Expect the response to be 'Base'

    expect(renderBase).toHaveBeenCalled()
  })

  it('should call renderHome on GET /content/home', async () => {
    await request(app).get('/content/home').expect(200, 'Home') // Expect the response to be 'Home'

    expect(renderHome).toHaveBeenCalled()
  })

  it('should call renderAbout on GET /content/about', async () => {
    await request(app).get('/content/about').expect(200, 'About') // Expect the response to be 'About'

    expect(renderAbout).toHaveBeenCalled()
  })
})
