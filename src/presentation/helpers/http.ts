import { HttpResponse } from '../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (param: string): HttpResponse => ({
  statusCode: 200,
  body: param
})
