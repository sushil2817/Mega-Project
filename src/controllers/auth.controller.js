<<<<<<< HEAD
import {asyncHandler} from '../utils/async-handler'
import {} from '../validators/'

const registerUser = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const loginUser = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const logoutUser = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const verifyEmail = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const resendVerificationEmail = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const refreshAccessToken = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const forgotPasswordRequest = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const changeCurrentPassword = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});

const getCurrentUser = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body;
    // validation
});


export {registerUser};
=======
import { asyncHandler } from "../utils/async-handler.js"

const registerUser = asyncHandler(async (req,res)=>{
    const {email,username,password,role} = req.body
    // validation
    if(!email || !password){

    }
    if(password.length < 8 ){}
})

export {
    registerUser,
}
>>>>>>> 6dcd690 (Node js project)
