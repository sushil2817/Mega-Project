<<<<<<< HEAD
const asyncHandler = (requestHandler){
    return function(req,res,next) {
        Promise.resolve(requestHandler(req,res,next))
            .catch(function(err){
                next(err)
            })
    }
}

export {asyncHandler}

=======
// const asyncHandler = (requestHandler) => 
// {
//     return (req,res,next)=>{
//         Promise.resolve(
//             requestHandler(req,res,next))
//             .catch((err)=>next(err))
//     }
// }

// export {asyncHandler};


// TODO: we may make it later

function asyncHandler(requestHandler){
    return function(req,res,next){
        Promise.resolve(requestHandler(req,res,next))
        .catch(function(err){
            next(err);
        })
    }
}

export {asyncHandler};


function test(req,res,next){
    Promise.resolve()
    .catch()
}
>>>>>>> 6dcd690 (Node js project)
