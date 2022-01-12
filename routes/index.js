import express from 'express'
import { registerController, loginController, userController, refreshController } from '../controllers'
import authHandler from '../middlewares/authHandler'

// Initialize Router
const router = express.Router()

// Registration Route
router.post('/register', registerController.register)

// Login Route
router.post('/login', loginController.login)

// Profile Route
router.get('/me', authHandler, userController.profile)

// Refresh Controller Route
router.post('/refresh', refreshController.refresh)

export default router 