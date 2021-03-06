import { SquareMeters } from '../../src/presentation/controllers/square-meters'
import { badRequest, ok, serverError } from '../../src/presentation/helpers/http'
import { MissingParamError } from '../../src/presentation/errors'
import { PropertySpy, throwError } from './mock'

type SutTypes = {
  sut: SquareMeters
  propertySpy: PropertySpy
}

const makeSut = (): SutTypes => {
  const propertySpy = new PropertySpy()
  const sut = new SquareMeters(propertySpy)
  return {
    sut,
    propertySpy
  }
}

describe('Controller', () => {
  test('Should return 400 if meters not provided', async () => {
    const { sut } = makeSut()
    const httpRequest = { body: { value: '2' } }
    const res = await sut.handle(httpRequest)
    expect(res.statusCode).toBe(400)
    expect(res).toEqual(badRequest(new MissingParamError('meters')))
  })

  test('Should return 400 if value not provided', async () => {
    const { sut } = makeSut()
    const httpRequest = { body: { meters: '2' } }
    const res = await sut.handle(httpRequest)
    expect(res.statusCode).toBe(400)
    expect(res).toEqual(badRequest(new MissingParamError('value')))
  })

  test('Should return 500 if consulting database trows error', async () => {
    const { sut, propertySpy } = makeSut()
    const httpRequest = { body: { meters: '2', value: '2' } }
    jest.spyOn(propertySpy, 'calculation').mockImplementationOnce(throwError)
    const res = await sut.handle(httpRequest)
    expect(res.statusCode).toBe(500)
    expect(res).toEqual(serverError(new Error()))
  })

  test('Should return 200', async () => {
    const { sut } = makeSut()
    const httpRequest = { body: { meters: '2', value: '2' } }
    const res = await sut.handle(httpRequest)
    expect(res.statusCode).toBe(200)
    expect(res).toEqual(ok('R$10.000,00'))
  })
})
