import { Router } from "express";
import {UserRoleEnum} from '../utils/constants.js'
import { valideProjectPermission } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:projectId")
    .get(
        valideProjectPermission(
            [UserRoleEnum.ADMIN,UserRoleEnum.MEMBER]),
        getNotes)
    .post(
        valideProjectPermission(
            [UserRoleEnum.ADMIN], UserRoleEnum.MEMBER),
        createNote
    )


export default router