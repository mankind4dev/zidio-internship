import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F9131%2F9131529.png&tbnid=xerVrcHRTNGcRM&vet=12ahUKEwj_r9qaneyDAxUSnCcCHRwqC1wQMygEegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_9131529&docid=OG7nRYiTFgdAvM&w=512&h=512&q=user&ved=2ahUKEwj_r9qaneyDAxUSnCcCHRwqC1wQMygEegQIARB8",
    },
}, { timestamps: true });

const Zidio = mongoose.model("Zidio", userSchema);

export default Zidio;