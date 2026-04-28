import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./route/noteroute.js";


const app = express();
app.use(bodyParser.json())
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL || 7000;

mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log("DB connected successfuly")
        app.listen(PORT,()=>{
            console.log("App is running on Port: "+PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })



app.use("/api",route)
