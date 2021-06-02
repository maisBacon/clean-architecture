import { gql } from 'apollo-server-express'
export default gql`
type Query {
    squareMeters (meters: String! ,value: String): String
  }`
