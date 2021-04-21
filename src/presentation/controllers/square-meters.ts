import { Controller , HttpResponse, HttpRequest } from '../protocols'
import { badRequest , serverError, ok } from '../helpers'
import { MissingParamError } from '../errors'
import { requiredParams } from '../../constants'

export class SquareMeters implements Controller {
  constructor (private readonly property: any) {
    this.property = property
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      for (const param of requiredParams) {
        if (!httpRequest.body[param]) {
          return badRequest(new MissingParamError(param))
        }
      }
      const result = this.property.calculation(httpRequest)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
