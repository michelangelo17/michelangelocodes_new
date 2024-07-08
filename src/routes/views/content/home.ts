import { Response, Request } from 'express'
import path from 'path'

export const renderHome = (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, '..', '..', '..', 'public', 'content', 'home.html'),
  )
}
