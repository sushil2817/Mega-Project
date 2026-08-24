class ApiResponse{
    constructor(
        statusCode,
        data,
        message="Success"
    ){
        this.statusCode = statusCode;
        this.data = data;
<<<<<<< HEAD
        this.message = message
        this.success = statusCode < 400
=======
        this.message = message;
        this.success = statusCode < 400 //true
>>>>>>> 6dcd690 (Node js project)
    }
}

export {ApiResponse}