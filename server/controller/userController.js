import User from "../modal/userModal.js";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const SignUp = async(req, res) => {
    const {name, email, password} = req.body ; 
    const resume = req.file;
    // console.log(resume, req.body )

    if(!name || !email || !password || !resume){
        return res.status(401).json({message: "All fields are required"})
    }
    try {
        const hashPassword = bcryptjs.hashSync(password, 10)
        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            resume: {
                data: resume.buffer,
                contentType: resume.mimetype
            }
        })
      const {password: pass, resume: resu,  ...rest} = user._doc
      const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "15 min"})
      return res.status(200).json({message: "success", rest,  token})
        
    } catch (error) {
        console.log(error.message)

       return res.status(403).json({message: "Internal server error"})
    }
}

const Logout = async (req, res) => {
    try {
        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export {SignUp, Logout}