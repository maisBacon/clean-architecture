import path from 'path'
import { mergeResolvers,mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const resolversArray = loadFilesSync(path.join(__dirname, '..', 'graphql', '**', 'resolver', '**'))
export const resolvers = mergeResolvers(resolversArray)

const typesArray = loadFilesSync(path.join(__dirname, '..', 'graphql', '**', 'type-defs', '**'))
export const typeDefs = mergeTypeDefs(typesArray)
