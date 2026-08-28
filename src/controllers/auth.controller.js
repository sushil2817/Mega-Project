import {ApiError} from  "../utils/api-error.js"
import { asyncHandler } from "../utils/async-handler.js"
import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/api-response.js"
import { body } from "express-validator"

const registerUser = asyncHandler(async (req, res) => {
    console.log("inside method");
    console.log(req.body);

    const { email, username, password, role, fullname } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Fields are missing");
    }

    if (password.length < 8) {
        throw new ApiError(400, "Password must be at least 8 characters");
    }

    const oldUser = await User.findOne({
        email: email.toLowerCase()
    });

    if (oldUser) {
        throw new ApiError(409, "User already exists");
    }

    const newUser = await new User({
        email: email.toLowerCase(),
        username,
        password,
        fullname,
        role
    }).save();

    return res.status(201).json(
        new ApiResponse(201, {
            message: "User Added successfully!"
        })
    );
});


export {
    registerUser,
}