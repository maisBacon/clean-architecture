import setupRoutes from './setup-express'
import setupApollo from './setup-apollo'
import express from 'express'

const app = express()
setupApollo(app)
setupRoutes(app)
export default app
