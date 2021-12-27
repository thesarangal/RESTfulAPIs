import Joi from "joi"
import { User } from "../../models"
import CustomErrorHandler from '../../services/CustomErrorHandler'
import bcrypt from 'bcrypt'
import JwtService from "../../services/JwtService"

const registerController = {
    async register(req, res, next) {

        // Validation Schema
        const registerSchema = Joi.object({
            name: Joi.object({
                first: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
                last: Joi.string()
                    .min(3)
                    .max(30)
                    .required()
            }).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        // Validate Request Body
        const { error } = registerSchema.validate(req.body)

        if(error){
            return next(error)
        }

        // Check weather email is already exists or not
        try {
            const exist = await User.exists({ email: req.body.email })

            if(exist){
                return next(CustomErrorHandler.alreadyExists('This email is already taken'))
            }
        
        } catch(err){
            return next(err)
        }

        const {name, email, password} = req.body

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Prepare the model
        const user = new User({
            name : {
                first: name.first,
                last: name.last
            },
            email,
            password: hashedPassword
        })

        let accessToken;
        try {
            const result = await user.save()

            // Generate Token
            accessToken = JwtService.sign({ _id: result._id, role: result.role })
            

        } catch (err) {
            return next(err)
        }

        res.json({
            accessToken
        })
    }
}

export default registerController