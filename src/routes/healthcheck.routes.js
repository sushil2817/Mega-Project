import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";
<<<<<<< HEAD
const router = Router();

// router.route("/").get(healthCheck)

router.get("/",healthCheck)
export default router
=======

const router = Router()

router.route("/").get(healthCheck);

export default router;
>>>>>>> 6dcd690 (Node js project)
