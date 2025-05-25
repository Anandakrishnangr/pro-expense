import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import cors from 'cors'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { PORT } from './config/config'
import { prisma } from './config/prisma.config'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import path from 'path'
import fs from 'fs'

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

  const downloadsDir = path.resolve(__dirname, '../../../Downloads')

  app.use('/share', express.static(downloadsDir))

  app.get('/share/list', (req, res) => {
    try {
      fs.readdir(downloadsDir, (err, files) => {
        if (err) {
          console.log('Error reading directory:', err)
          return res.status(500).send('Unable to list files')
        }
        const listItems = files
          .map(
            (file) =>
              `<li>
                <a href="/share/${encodeURIComponent(file)}" download>${file}</a>
                // <button onclick="()=>copyLink('${encodeURIComponent(file)}')">Copy Link</button>
              </li>`
          )
          .join('')
        res.send(`
          <html>
            <head>
              <title>Downloadable Files</title>
              <script>
                function copyLink(file) {
                  const url = window.location.origin + '/share/' + file;
                  navigator.clipboard.writeText(url).then(function() {
                    alert('Link copied to clipboard!');
                  }, function(err) {
                    alert('Failed to copy: ' + err);
                  });
                }
              </script>
            </head>
            <body>
              <h2>Files available for download</h2>
              <ul>
                ${listItems}
              </ul>
            </body>
          </html>
        `)
      })
    } catch (error) {
      console.error('Error listing files:', error)
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
