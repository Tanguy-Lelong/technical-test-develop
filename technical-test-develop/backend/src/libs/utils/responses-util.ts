import { NextFunction, Request, Response } from 'express'

const sizeLimitBody = 200
export const mainHandler = (req: Request, res: Response, next: NextFunction): void => {
  let bodyStr = JSON.stringify(req.body)
  if (bodyStr.length > sizeLimitBody) bodyStr = bodyStr.substring(0, sizeLimitBody) + '...'
  console.log(`${req.method} ${req.originalUrl} ${bodyStr}`)
  next()
}
