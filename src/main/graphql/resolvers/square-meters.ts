import { adaptResolver } from '../../adapters/apollo-resolver'
import Controller from '../../factory/makeController'

export default {
  Query: {
    squareMeters: async () => adaptResolver(Controller)
  }
}
