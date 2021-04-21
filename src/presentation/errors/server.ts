export class ServerError extends Error {
  innerMessage: string
  constructor (error: Error) {
    super('An error occurred while processing your request')
    this.name = 'ServerError'
    this.innerMessage = error.message
    this.stack = error.stack
  }
}
