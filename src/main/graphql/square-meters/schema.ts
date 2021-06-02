import { gql } from 'apollo-server-express'
export const type = gql`
type Query {
    squareMeters (meters: String! ,value: String): String
  }`
