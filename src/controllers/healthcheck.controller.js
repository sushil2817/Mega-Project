
import {ApiResponse} from "../utils/api-response.js";

const healthCheck = async (req,res)=>{
    // console.log("Health check hit");
        try {
        await res.status(200).json(
        new ApiResponse(200,{messgae:"Server is running"})
    )
    } catch (error) {
    console.log("Error",error);
    
    }
}

export {healthCheck};