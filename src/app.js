import express from "express"


const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

// router imports
import  healthCheckRouter  from "./routes/healthcheck.routes.js";
import  registerUser from "./routes/auth.routes.js"

app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1",registerUser)


export default app;