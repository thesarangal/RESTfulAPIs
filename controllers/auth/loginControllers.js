import Joi from "joi"
import { User } from "../../models"
import CustomErrorHandler from '../../services/CustomErrorHandler'
import bcrypt from 'bcrypt'
import JwtService from "../../services/JwtService"

const loginController = {
    async login(req, res, next) {

        // Validation Schema
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        // Validate Request Body
        const { error } = loginSchema.validate(req.body)

        if(error){
            return next(error)
        }

        // Check weather email is already exists or not
        try {
            const user = await User.findOne({ email: req.body.email })

            if(!user){
                return next(CustomErrorHandler.invalidLoginCredentials('User doesn\'t exists.'))
            }

            // Compare Password
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

            if(!isPasswordMatch){
                return next(CustomErrorHandler.invalidLoginCredentials('Invalid login credentials.'))
            }

            // Generate Token
            const accessToken = JwtService.sign({ _id: user._id, role: user.role })

            res.json({
                accessToken
            })
        
        } catch(err){
            return next(err)
        }
    }
}

export default loginController