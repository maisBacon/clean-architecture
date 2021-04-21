import { Controller , HttpResponse, HttpRequest } from '../protocols'
import { badRequest , ok } from '../helpers'
import { MissingParamError } from '../errors'
import { requiredParams } from '../../constants'

export class SquareMeters implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    for (const param of requiredParams) {
      if (!httpRequest.body[param]) {
        return badRequest(new MissingParamError(param))
      }
    }
    return ok('body')
  }
}
