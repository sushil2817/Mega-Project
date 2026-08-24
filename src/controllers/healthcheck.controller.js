<<<<<<< HEAD
import {ApiResponse} from "../utils/api-response.js"
const healthCheck = (req,res)=>{
    res.status(200).json(
        new ApiResponse(200,{message:"Server is running"})
    );
}

export {healthCheck}
=======
import {ApiResponse} from "../utils/api-response.js";

const healthCheck = async (req,res)=>{
        try {
        await res.status(200).json(
        new ApiResponse(200,{messgae:"Server is running"})
    )
    } catch (error) {
    console.log("Error",error);
    
    }
}

export {healthCheck};
>>>>>>> 6dcd690 (Node js project)
