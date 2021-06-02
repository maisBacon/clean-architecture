import { adaptResolver } from '../../../adapters/apollo-resolver'
import Controller from '../../../factory/makeController'

export default {
  Query: {
    squareMeters: async (_: any, args: any, context: any) => adaptResolver(Controller, args, context)
  }
}
