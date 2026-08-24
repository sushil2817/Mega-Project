class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.errors = errors;
<<<<<<< HEAD
=======

>>>>>>> 6dcd690 (Node js project)
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

<<<<<<< HEAD

=======
>>>>>>> 6dcd690 (Node js project)
export {ApiError}