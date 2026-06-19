import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB= async () => {
    try{
    const connectionInstance=await mongoose.coonect(process.env.MONGO_URL,{
        dbName=DB_NAME
    })
    console.log(`connected to mongoose: ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log(`error in connecting to db: ${err}`)
        process.exit(1);
    }
}

export default connectDB;