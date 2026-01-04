import {asyncHandler} from '../utils/async-handler.js' 
import {ApiError} from '../utils/api-error.js'
import {User} from '../models/user.model.js'
import mongoose from 'mongoose'


export const verifyJWT = asyncHandler(async (req,res,next) => 
    {
        const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer ","")

        if(!token){
            throw new ApiError(401, "Unauthorized request")
        }

        try{
            const decodedToken = jwt.verify(token,process.env.ACCESS.TOKEN.SECRET)
            const user = User.findById(decodedToken?._id).select(
                "-password -refreshToken -emailVerificationToken -emailVerificationExpiry")
            if(!user){
                throw new ApiError(401,"Invalid Access Token")
            }
            req.user = user;
            next()
        }catch(error){
            throw new ApiError(401, error?.message || "Invalid access token")
        }
    }
)

export const validateProjectPermission = (roles = []) =>asyncHandler(async (req,res,next)=>{
    const {projectId}  = req.param;
    if(!projectId){
        throw new ApiError(401,"Invalid project id");
    }

    const project = await ProjectMember.findOne({
        project: mongoose.Types.ObjectId(projectId),
        user: mongoose.Types.ObjectId(req.user._id),
    })
    
    if(!project){
        throw new ApiError(401,"Project not found");
    }

    const givenRole = project?.role
    req.user.role = givenRole
    if(!roles.includes(givenRole)){
        throw new ApiError(403,"You don't have permission to perform this operation");
    }

})