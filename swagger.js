const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/*.js'] // Your route files path

const doc = {
  info: {
    version: "1.0.0",
    title: "Your API Title",
    description: "API documentation for your API"
  },
  host:"cse341-spring23-3b0l.onrender.com",// API host URL
  basePath: "/",
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [ // Your tags definition
    {name: 'Contacts', description: 'API for Nathan S. Hoskins Contacts'}
  ],
  securityDefinitions: { // Your security definitions
    JWT: {
      type: 'none',
      in: 'none',
      name: 'none',
      description: "",
    }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./routes/index') 
})
