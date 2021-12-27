import { DEBUG_MODE } from "../config"
import { ValidationError } from "joi"
import CustomErrorHandler from '../services/CustomErrorHandler';

const errorHandler = (error, req, res, next) => {
    let statusCode = 500
    let data = {
        message: 'Internal server error',

        // Spread Syntax: statement under {} will be execute if first condition will true
        ...(DEBUG_MODE === 'true' && { originalError: error.message })
    }

    if(error instanceof ValidationError){
        statusCode = 422
        data = {
            message: error.message
        }
    } else if(error instanceof CustomErrorHandler){
        statusCode = error.status
        data = {
            message: error.message
        }
    }

    return res.status(statusCode).json(data)
}

export default errorHandler