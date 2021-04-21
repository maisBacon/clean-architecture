import { SquareMeters } from './square-meters'

import { badRequest, ok } from '../helpers/http'
import { MissingParamError } from '../errors'

const makeSut = (): SquareMeters => {
  return new SquareMeters()
}

describe('Controller', () => {
  test('Should return 400 if meters not provided', () => {
    const sut = makeSut()
    const httpRequest = { body: { value: '2' } }
    const res = sut.handle(httpRequest)
    expect(res.statusCode).toBe(400)
    expect(res).toEqual(badRequest(new MissingParamError('meters')))
  })

  test('Should return 400 if value not provided', () => {
    const sut = makeSut()
    const httpRequest = { body: { meters: '2' } }
    const res = sut.handle(httpRequest)
    expect(res.statusCode).toBe(400)
    expect(res).toEqual(badRequest(new MissingParamError('value')))
  })

  test('Should return 200', () => {
    const sut = makeSut()
    const httpRequest = { body: { meters: '2', value: '2' } }
    const res = sut.handle(httpRequest)
    expect(res.statusCode).toBe(200)
    expect(res).toEqual(ok('body'))
  })
})
