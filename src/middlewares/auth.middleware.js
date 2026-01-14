import { verify } from "jsonwebtoken"
import {asyncHandler} from '../utils/async-handler.js'
import {ApiError} from "../utils/api-error.js"
import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"
import mongoose from "mongoose"
import {ProjectMember} from "../models/projectmember.model.js"

export const verifyJWT = asyncHandler(async(req,res,next)=>{
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
        throw new ApiError(401, "Unauthorization request");
    }
    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken -emailverificationToken -emailVerificationExpiry")
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid access token")
    }

})


export const valideProjectPermission = (role = []) => asyncHandler(async (req,res,next)=>{
    const {projectId} =  req.params;
    if(!projectId){
        throw new ApiError(401,"Invalid Project Id")
    }
    
    const project = await ProjectMember.findOne({
        project: mongoose.Types.ObjectId(projectId),
        user: mongoose.Types.ObjectId(req.user._id)
    })

    if(!project){
        throw new ApiError(401,"Project not Found")
    }

    const givenRole = project?.role
    req.user.role = givenRole
    if(!roles.includes(givenRole)){
        throw new ApiError(403, "You do not have permission to perform this operation")
    }


})