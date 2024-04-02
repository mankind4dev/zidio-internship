import express from 'express';
import mongoose from 'mongoose';
import dotenv from"dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js";
import cookieParser from 'cookie-parser';
import path from "path";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB perfectly");
}).catch((error) => {
    console.log(error);
})


const __dirname = path.resolve();

const app = express();

const PORT = 3200;

app.use(express.json());

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!!!`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use(express.static(path.join(__dirname, 'client/dist')));


app.get((err, req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});