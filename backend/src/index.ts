import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import cors from 'cors'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { PORT } from './config'
import { prisma } from './config/prisma.config'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

async function startServer() {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(cors())
  app.use(express.json())

  // Health check
  app.get('/health', async (req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`
      res.send('OK')
    } catch (error) {
      res.status(500).send('Database connection failed')
    }
  })

  // Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  // REST API Routes

  // GraphQL Endpoint
  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({
        req,
        res,
        prisma,
      }),
    })
  )

  httpServer.listen(PORT || 3000, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT || 3000}`)
    console.log(`📚 Swagger Docs at http://localhost:${PORT || 3000}/api-docs`)
    console.log(`🔗 GraphQL Playground at http://localhost:${PORT || 3000}/graphql`)
  })
}

startServer()
