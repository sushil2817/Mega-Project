import { Router } from "express";
import {AvailableUserRoles, UserRolesEnum} from "../utils/contants.js"
import { validateProjectPermission } from "../middlewares/auth.middleware.js";
import { createNote, deleteNote, getNoteById, updateNote } from "../controllers/note.controller.js";

const router = Router();

router.route("/:projectId")
    .get(
        validateProjectPermission(AvailableUserRoles),
        getNotes)
    .post(
        validateProjectPermission([UserRolesEnum.ADMIN]),
        createNote)
        
router
    .route("/:projectId/n/:noteId")
    .get(validateProjectPermission(AvailableUserRoles),
        getNoteById)
    .put(validateProjectPermission([UserRolesEnum.ADMIN]),
    updateNote)
    .delete(validateProjectPermission([UserRolesEnum.ADMIN]),
    deleteNote)

export default router;



















// import { Router } from "express";
// import {AvailableUserRoles, UserRoleEnum} from '../utils/constants.js'
// import { valideProjectPermission } from "../middlewares/auth.middleware.js";
// import {getNotes,createNote, getNoteById, updateNote, deleteNote} from "../controllers/note.controller.js"

// const router = Router();

// router.route("/:projectId")
//     .get(valideProjectPermission(AvailableUserRoles),getNotes)
//     .post(valideProjectPermission([UserRoleEnum.ADMIN]),createNote)
    

// router
// .route(":/projectId/n/:noteId")
// .get(valideProjectPermission(AvailableUserRoles),getNoteById)
// .put(valideProjectPermission([UserRoleEnum.ADMIN]),updateNote)
// .delete(valideProjectPermission([UserRoleEnum.ADMIN]),deleteNote)

// export default router



