import express from 'express'
import { APP_PORT, DATABASE_URL } from './config'
import errorHandler from './middlewares/errorHandler'
import routes from './routes'
import mongoose from 'mongoose';

// Database Connection
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error:'))
db.once('open', () => {
    console.log('DB Connected')
})

// Initialize Express
const app = express()

// To receive Request Body 
app.use(express.json())

// Register Routes
// '/api' is prefix for every route
app.use('/api', routes)

// Register Middleware
app.use(errorHandler)

// Start Server
app.listen(APP_PORT, () => {
    `Listening on ${APP_PORT}`
})