import setupRoutes from './setup'
import express from 'express'

const app = express()
setupRoutes(app)
export default app
