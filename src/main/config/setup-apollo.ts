import { resolvers, typeDefs } from './merge-graphql'
import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export default (app: Express): void => {
  const apollo = new ApolloServer({
    resolvers,
    typeDefs
  })
  apollo.applyMiddleware({ app })
}
