import { Router } from "express";

import { registerUser } from "../controllers/auth.controller.js" 
// import {validate} from "../minddlewares/validator.middlewares.js"
// import {userRegistrationValidator} from "../validators/index.js"

const router = Router();
// userRegistrationValidator(), 
// validate, 

router.route("/register").post(
        registerUser
    );

export default router;