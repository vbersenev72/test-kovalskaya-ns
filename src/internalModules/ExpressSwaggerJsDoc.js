import swaggerJsDoc from 'swagger-jsdoc'
import * as swaggerUi from 'swagger-ui-express'

export function expressSwaggerJsDoc(
  routesPath,
  openapiVersion = '3.0.0',
  version = '0.1',
  title = 'Rest API Doc'
) {
  const options = {
    definition: {
      openapi: openapiVersion,
      info: {
        title: title,
        version
      },
      components: {},
      security: [
        {
          bearerAuth: []
        }
      ]
    },
    apis: [routesPath]
  }

  const swaggerSpec = swaggerJsDoc(options)

  return function (application) {
    application.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    application.get('/docs.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(swaggerSpec)
    })
  }
}
