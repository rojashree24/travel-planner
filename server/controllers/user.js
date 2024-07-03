import bcrypt from "bcryptjs";

import userModel from "../models/user.js";

export const signin = async (req, res) => {
 const { email, password } = req.body;
 try {
   const oldUser = await userModel.findOne({ email });
   if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
   const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
   if (!isPasswordCorrect)
     return res.status(400).json({ message: "Invalid credentials" });
   res.status(200).json({ result: oldUser });
 } catch (err) {
   res.status(500).json({ message: "Something went wrong" });
 }
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ username, email });
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
