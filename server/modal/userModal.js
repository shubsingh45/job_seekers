import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    resume: {
        data: {
            type: Buffer,  // Data type to store binary data
            required: true  // Make sure data is required
        },
        contentType: {
            type: String,  // MIME type of the file
            required: true  // Make sure contentType is required
        }
    }
})

const User = mongoose.model("User", userSchema)

export default User;