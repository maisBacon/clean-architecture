import { adaptRoute } from '../adapters/express-router'
import { Router } from 'express'
import Controller from '../factory/makeController'

export default (router: Router): void => {
  router.get('/', adaptRoute(Controller))
}
