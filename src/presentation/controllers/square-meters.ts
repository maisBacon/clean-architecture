import { Controller , HttpRequest, HttpResponse } from '../protocols'
import { badRequest , serverError, ok } from '../helpers'
import { MissingParamError } from '../errors'
import { requiredParams } from '../../constants'
import { Property } from '../../domain'

export class SquareMeters implements Controller {
  constructor (private readonly property: Property) {
    this.property = property
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    console.log('CONTROLLER',httpRequest)
    try {
      for (const param of requiredParams) {
        if (!httpRequest.body[param]) {
          return badRequest(new MissingParamError(param))
        }
      }
      const result = await this.property.calculation(httpRequest.body)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
