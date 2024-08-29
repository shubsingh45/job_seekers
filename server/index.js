import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import router from './route/userRoute.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'POST',
    credentials: true
}));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected successfully');
    } catch (error) {
        console.error('connection error:', error.message);
    }
};
connectDB()
//
app.use(router)

const PORT =process.env.PORT || 5001
app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`)
})
