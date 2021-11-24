import { Request } from 'express'

export interface ModelContext {
  req: Request & {
    session: {
      userId: number
    }
  }
  res: Response & {
    session: {
      userId: number
    }
  }
}
