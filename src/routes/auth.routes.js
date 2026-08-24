import { Router } from "express";
<<<<<<< HEAD
import { registerUser } from "../controllers/auth.controller.js";
import {validate} from "../middlewares/validator.middleware.js"
import {userRegistrationValidator} from "../validators/index.js"
const router = Router();
router.route("/register").post(userRegistrationValidator(),validate, registerUser);

export default router
=======
import { registerUser } from "../controllers/auth.controller.js" 
import {validate} from "../minddlewares/validator.middlewares.js"
import {userRegistrationValidator} from "../validators/index.js"

const router = Router();

router.route("/register").post(
        userRegistrationValidator(), 
        validate, 
        registerUser
    );
>>>>>>> 6dcd690 (Node js project)
