import { Response, Request } from 'express'
import path from 'path'

export const renderContact = (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, '..', '..', '..', 'public', 'content', 'contact.html'),
  )
}
