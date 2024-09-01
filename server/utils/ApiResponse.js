class ApiSucceessResponse {
    constructor(statusCode, data, message = "Success" ) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
class ApiErrorResponse {
    constructor(statusCode,  message= "Something went wrong",) {
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 400
    }
}

module.exports =  {ApiSucceessResponse ,ApiErrorResponse };