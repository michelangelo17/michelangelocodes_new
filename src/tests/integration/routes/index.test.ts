import request from 'supertest'
import express, { Application } from 'express'
import router from '../../../routes'
import { viewRouter } from '../../../routes/views'

jest.mock('../../../routes/views', () => ({
  viewRouter: jest.fn((_req, res) => res.status(200).send('ViewRouter')),
}))

let app: Application

beforeAll(() => {
  app = express()
  app.use(router)
})

afterAll(() => {
  jest.resetAllMocks()
})

describe('mainRouter', () => {
  it('should use viewRouter on GET /', async () => {
    await request(app).get('/').expect(200, 'ViewRouter') // Expect the response to be 'ViewRouter'

    expect(viewRouter).toHaveBeenCalled()
  })

  // Uncomment and adjust the test when adding apiRouter
  // it('should use apiRouter on GET /api', async () => {
  //   await request(app)
  //     .get('/api')
  //     .expect(200, 'ApiRouter'); // Expect the response to be 'ApiRouter'
  //
  //   expect(apiRouter).toHaveBeenCalled();
  // });
})
