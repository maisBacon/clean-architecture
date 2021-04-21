export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`parameter: ${paramName}`)
    this.name = 'MissingParam'
  }
}
