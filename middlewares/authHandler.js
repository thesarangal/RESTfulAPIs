
import CustomErrorHandler from '../services/CustomErrorHandler';
import JwtService from '../services/JwtService';

const authHandler = async (req, res, next) => {
    let authHeader = req.headers.authorization;

    if(!authHandler){
        next(CustomErrorHandler.unAuthorized())
    }

    try {
        
    // Split Authentication Header to get token
    // because there will be a word before token i.e. "Bearer <TOKEN>"
    const token = authHeader.split(' ')[1]

        const { _id, role } = await JwtService.verify(token)

        const user = {
            _id,
            role
        }

        // Attach Property into Request Object
        req.user = user;

        next()
    } catch(error){
        next(CustomErrorHandler.unAuthorized())
    }
}

export default authHandler