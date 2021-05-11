/* eslint-disable @typescript-eslint/no-floating-promises */
import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  import ('../routes/square-meters').then(x => x.default(router))
}
