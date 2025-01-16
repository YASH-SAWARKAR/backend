import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () =>[
        console.log(`server is running at port : $
            {process.env.PORT}`)
    ])
})
.catch((err) => {
    console.log("MongoDB connection failes !!" , err);
})

















/*
import express from "express"
const app = express();
( async ()  => { 
    try {
       await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("ERROR", (error) => {
            console.log("ERROR" , error)
            throw error
       })

    
       app.listen(process.env.PORT, () => {
            console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("ERROR: " , error)
        throw error
    }
} ) ()

*/