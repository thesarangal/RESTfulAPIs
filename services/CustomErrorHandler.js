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
     * @param {string} message Error Message
     * @returns {CustomErrorHandler} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static alreadyExists(message){
        return new CustomErrorHandler(409, message)
    }

    /**
     * if user's login credentials are invalid
     *
     * @static
     * @param {string} message Error Message
     * @returns {CustomErrorHandler} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static invalidLoginCredentials(message){
        return new CustomErrorHandler(401, message)
    }

    /**
     * if API's Authentication Failed
     *
     * @static
     * @param {string} message Error Message
     * @returns {*} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static unAuthorized(message = "Unauthorized Access") {
        return new CustomErrorHandler(401, message)
    }

    /**
     * If resource not found
     *
     * @static
     * @param {string} [message="404 Not Found"] Error Message
     * @returns {CustomErrorHandler} Instance of this class with status and message
     * @memberof CustomErrorHandler
     */
    static notFound(message = "404 Not Found") {
        return new CustomErrorHandler(404, message)
    }

}

export default CustomErrorHandler