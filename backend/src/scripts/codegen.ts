import { printSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs } from '@graphql-tools/merge'
import fs from 'fs'
import path from 'path'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

// Use CommonJS globals for __filename and __dirname

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefs),
  resolvers,
})

const printedSchema = printSchema(schema)

fs.writeFileSync(path.join(__dirname, '../temp/schema.graphql'), printedSchema)

console.log('✅ schema.graphql generated')
