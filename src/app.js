import express from "express"
<<<<<<< HEAD
const app = express();

// router imports
import healthCheckRouter from "./routes/healthcheck.routes.js"
app.use("/api/v1/healthcheck",healthCheckRouter)

export default app; 
=======

const app = express();


// router imports
import  healthCheckRouter  from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck",healthCheckRouter)


export default app;
>>>>>>> 6dcd690 (Node js project)
