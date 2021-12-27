import Joi from "joi"
import { User } from "../../models"
import CustomErrorHandler from '../../services/CustomErrorHandler'
import bcrypt from 'bcrypt'
import JwtService from "../../services/JwtService"

const userController = {
    async profile(req, res, next) {

      
        try {

            // Get Record based on Email Id
            // 'select' function used to filter the parameters: '-' (dash) used to hide specific parameter
            const user = await User.findOne({ _id: req.user._id }).select('-password -updatedAt -__v')

            if(!user){
                return next(CustomErrorHandler.notFound())
            }

            res.json({
                user
            })
        
        } catch(err){
            return next(err)
        }
    }
}

export default userController