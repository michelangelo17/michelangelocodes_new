import { Request, Response } from 'express'
import path from 'path'
import sinon from 'sinon'
import { renderBase } from '../../../../routes/views/base'

describe('renderbase', () => {
  let res: Response
  let req: Request
  let sendFile: sinon.SinonStub

  beforeEach(() => {
    res = {
      sendFile: sinon.stub(),
    } as unknown as Response
    req = {} as Request
    sendFile = res.sendFile as sinon.SinonStub
  })

  it('should send the base.html file', () => {
    renderBase(req, res)

    sinon.assert.calledOnce(sendFile)
    sinon.assert.calledWith(
      sendFile,
      path.join(__dirname, '..', '..', '..', '..', 'public', 'base.html'),
    )
  })
})
