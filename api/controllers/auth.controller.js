import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utilities/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const date = new Date()
  const { username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true
      })
      .status(200)
      .json(rest);
    const currentTIme = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const expireTime = currentTIme + oneDay;
    const expireExactly = new Date(expireTime);
    console.log(expireExactly)
  } catch (error) {
    next(error);
  }
};