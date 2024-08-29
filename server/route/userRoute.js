import express from 'express'
import upload from '../middleWare/upload.js'
import { Logout, SignUp } from '../controller/userController.js'

const router = express.Router()

router.post('/signup', upload.single('resume'), SignUp)
router.post('/logout', Logout)

export default router