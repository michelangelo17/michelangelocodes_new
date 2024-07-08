import fs from 'fs'
import path from 'path'
import { Request, Response, NextFunction } from 'express'

const injectNonce = (filePath: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return next(err)
      }

      const nonce = res.locals.nonce
      let modifiedData = data.replace(
        /<script nonce="PLACEHOLDER"/g,
        `<script nonce="${nonce}"`,
      )
      modifiedData = modifiedData.replace(
        /<style nonce="PLACEHOLDER"/g,
        `<style nonce="${nonce}"`,
      )

      res.send(modifiedData)
    })
  }
}

export default injectNonce
