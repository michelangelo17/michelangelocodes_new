import { Response, Request } from 'express'
import path from 'path'

export const renderBase = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'base.html'))
}
