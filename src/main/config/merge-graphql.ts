import path from 'path'
import { mergeResolvers,mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const resolversArray = loadFilesSync(path.join(__dirname, '..', 'graphql', '**', 'resolver', '*.ts'))
console.log(resolversArray)
export const resolvers = mergeResolvers(resolversArray)

const typesArray = loadFilesSync(path.join(__dirname, '..', 'graphql', '**', 'type-defs', '*.gql'))
console.log(typesArray)
export const typeDefs = mergeTypeDefs(typesArray)
