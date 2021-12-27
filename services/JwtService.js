import { JWT_SECRET } from '../config'
import jwt from 'jsonwebtoken'

/**
 * Class For JSON Web Token Related Tasks
 */
class JwtService {

    /**
     * Sign Token
     * 
     * @param {*} payload Data
     * @param {*} expiry Expiry Time in Seconds
     * @param {*} secret Secret Key for JWT
     * 
     * @returns Signed JWT
     */
    static sign(payload, expiry = '60s', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry })
    }
}

export default JwtService