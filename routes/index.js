import express from 'express'
import { registerController, loginController } from '../controllers'

// Initialize Router
const router = express.Router()

// Registration Route
router.post('/register', registerController.register)

// Login Route
router.post('/login', loginController.login)

export default router 