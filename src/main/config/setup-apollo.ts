import typeDefs from '../graphql/type-defs/square-meters'
import resolvers from '../graphql/resolvers/square-meters'
import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export default (app: Express): void => {
  const apollo = new ApolloServer({
    resolvers,
    typeDefs
  })
  apollo.applyMiddleware({ app })
}
