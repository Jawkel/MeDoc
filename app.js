import express from "express";
import {Server} from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import conn from "./db.js";

dotenv.config();

const app = express();
const io = new Server(process.env.SOCKET_IO_PORT, {
    cors: `http://localhost:${process.env.CLIENT_PORT}`,
    methods: ["GET", "POST"]
});

// Integrated middlewares that parse both json and urlencoded.
app.use(express.json({limit: "100mb", extended: true}));
app.use(express.urlencoded({limit: "100mb", extended: true}));

app.use(cors({credentials: true, origin: `http://localhost:${process.env.CLIENT_PORT}`}));
app.use(cookieParser());

conn(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)));