import express from 'express';
import mongoose from 'mongoose';
import dotenv from"dotenv";
import userRouter from "./routes/user.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB perfectly");
}).catch((error) => {
    console.log(error);
})

const app = express();

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!!!`);
});

app.use('/api/user', userRouter)