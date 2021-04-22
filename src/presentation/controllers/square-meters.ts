import { Controller , HttpRequest, HttpResponse } from '../protocols'
import { badRequest , serverError, ok } from '../helpers'
import { MissingParamError } from '../errors'
import { requiredParams } from '../../constants'
import { Property } from '../../domain'

export class SquareMeters implements Controller {
  constructor (private readonly property: Property) {
    this.property = property
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      for (const param of requiredParams) {
        if (!httpRequest.body[param]) {
          return badRequest(new MissingParamError(param))
        }
      }
      const result = this.property.calculation(httpRequest.body)
      return ok(result.success)
    } catch (error) {
      return serverError(error)
    }
  }
}
