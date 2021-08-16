import mongoose from "mongoose";
import dotenv from "dotenv";

export default function (func) {
    mongoose.connect(process.env.MONGO_URI, {
        connectTimeoutMS: 3000,
        socketTimeoutMS: 20000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(func)
        .catch(err => console.log(`${err} did not connect`));
}