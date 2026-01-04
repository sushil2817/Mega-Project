import { Router } from "express";
import {UserRolesEnum} from '../utils/constants'
import { validateProjectPermission } from "../middlewares/auth.middleware";

const router = Router();

router.route("/:projectId")
    .get(
        validateProjectPermission([UserRolesEnum.ADMIN,UserRolesEnum.MEMBER]),
        getNotes)
    .post(
        validateProjectPermission(
            [UserRolesEnum.ADMIN,
            UserRolesEnum.MEMBER]
        ),
        createNote
    )


export default router