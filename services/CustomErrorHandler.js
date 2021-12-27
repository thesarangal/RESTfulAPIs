/**
 * Custom Error Handling Class
 */
class CustomErrorHandler extends Error {

    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    /**
     * If user already exists
     *
     * @static
     * @param {*} message Error Message
     * @returns {*} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static alreadyExists(message){
        return new CustomErrorHandler(409, message)
    }

    /**
     * if user's login credentials are invalid
     *
     * @static
     * @param {*} message Error Message
     * @returns {*} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static invalidLoginCredentials(message){
        return new CustomErrorHandler(401, message)
    }

}

export default CustomErrorHandler