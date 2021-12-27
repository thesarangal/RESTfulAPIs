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

    /**
     * Verify Token
     *
     * @static
     * @param {*} token JWT Token
     * @param {*} [secret=JWT_SECRET] Secret Key for JWT
     * @returns {*} 
     * @memberof JwtService
     */
    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret)
    }
}

export default JwtService