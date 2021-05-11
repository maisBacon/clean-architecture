import { Controller } from '../../presentation/protocols'
import { UserInputError, ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller,args?: any, context?: any): Promise<any> => {
  console.log('===',controller)
  console.log('===',args)
  const request = {
    ...(args || {})
  }
  const httpResponse = await controller.handle(request)
  switch (httpResponse.statusCode) {
    case 200:return httpResponse.body
    case 400: throw new UserInputError(httpResponse.body.message)
    default: throw new ApolloError(httpResponse.body.message)
  }
}
