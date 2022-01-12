import Joi from "joi";
import { REFRESH_SECRET } from "../../config";
import { RefreshToken, User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";

const registerController = {
    async refresh(req, res, next) {

        // Validation Schema
        const refreshSchema = Joi.object({
            refreshToken: Joi.string().required(),
        })

        // Validate Request Body
        const { error } = refreshSchema.validate(req.body)

        if(error){
            return next(error)
        }

        let refreshToken;
        try {

            // Check Existing Token in Database
            refreshToken = await RefreshToken.findOne({ token: req.body.refreshToken })

            if(!refreshToken){
                return next(CustomErrorHandler.unAuthorized('Invalid refresh token'))
            }

            // Verify Existing Token
            let userId;
            try {
                const { _id } = await JwtService.verify(refreshToken.token, REFRESH_SECRET)
                userId = _id
            } catch (err) {
                return next(CustomErrorHandler.unAuthorized('Invalid refresh token'))
            }

            // Check User exists or not
            const user = User.findOne({ _id: userId })

            if(!user){
                return next(CustomErrorHandler.unAuthorized('No user found'))
            }

            // Generate Tokens
            const accessToken = JwtService.sign({ _id: user._id, role: user.role })

            // Generate Refresh Token
            const newRefreshToken = JwtService.sign({ _id: user._id, role: user.role }, '1y', REFRESH_SECRET)

            // Whitelist Refresh Token in Database
            await RefreshToken.create({ token: newRefreshToken })

            res.json({
                accessToken, refreshToken: newRefreshToken
            })

        } catch (err) {
            return next(new Error('Something went wrong' + err.message))
        }
    }
}

export default registerController;