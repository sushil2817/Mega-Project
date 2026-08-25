import app from "./app.js"
import dotenv from "dotenv"

import connectDB from "./db/db.js";
dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8000;

connectDB().then(()=>{
        app.listen(PORT,()=>
            console.log(`Server is running on port: ${PORT}`)
        )
        console.log("MongoDB Connected");
}).catch((err)=>{
    console.log("MongoDB Connection error:",err)
    process.exit(1);
}
)



// app.listen(()=>{
//     console.log(`Server is running on port ${PORT}`);
// })
