import express from 'express'
import { APP_PORT } from './config'

// Initialize Express
const app = express()

// Start Server
app.listen(APP_PORT, () => {
    `Listening on ${APP_PORT}`
})