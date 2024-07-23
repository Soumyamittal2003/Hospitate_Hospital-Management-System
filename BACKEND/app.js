import express from "express";

import cors from "cors";

import {config} from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";




const app =express();
config({path: "./config/config.env"})

//--------middlewares--------//

//connecting frontend & backend
app.use(
    cors({
        origin:[process.env.FRONTED_URL,process.env.DASHBORD_URL],
        method:["GET","POST","PUT","DELETE"],
        credentials: true,

})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp/"
    })
)

//connection DataBase
dbConnection();

export default app;