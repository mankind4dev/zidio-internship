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
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.atlassian.com%2Fagile%2Fproject-management%2Fuser-stories&psig=AOvVaw0z_XlsLfAU4pqAffV1DTeg&ust=1705270499955000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjZz_ex24MDFQAAAAAdAAAAABAD',
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;