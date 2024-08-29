import React, { useState, } from 'react'
import { Button, TextField } from '@mui/material'
import {Navigate, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import axios from 'axios'
import { fetchUserSuccess } from '../redux/userSlice'
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [resume, setResume] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const handelSignUp = async() => {
        setLoading(true)
        try {
            const res = await axios.post("https://job-seekers-6epj.onrender.com/signup", {name, email, password, resume}, {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                },
                withCredentials: true
            });
            if(res.data.message === "success"){
                dispatch(fetchUserSuccess(res.data.rest))
                console.log(res.data.rest)
                setSuccessMessage(res.data.message)
                localStorage.setItem('token', res.data.token)
                navigate('/')
                setLoading(false)
            }else{
                console.log(res.data.message)
                setErrorMessage(res.data.message)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            if (error.response) {
                console.log(error.response.data.message);
                setErrorMessage(error.response.data.message);
            } else {
                console.log(error.message);
                setErrorMessage("An unexpected error occurred");
            }
        }
    }
  
  return (
    <div className=' w-full min-h-screen flex justify-center '>
        <div className=" mt-14 flex flex-col gap-4 w-[340px] h-[400px]  bg-slate-300 rounded-br-2xl rounded-tl-2xl">
            <div className=" w-full flex flex-col justify-center gap-3 p-6">
            <TextField 
             label="Name" 
             size='small'
             value={name}
               className=" bg-white"
                onChange={((e) => {setName(e.target.value); setErrorMessage('')})}
               />
            <TextField 
             label="Email"
               size='small'
               value={email}
                className=" bg-white" 
                    onChange={((e) => {setEmail(e.target.value); setErrorMessage('')})}
                />
             <TextField 
             label="Passowrd"
               size='small'
               value={password}
                className=" bg-white" 
                    onChange={((e) => {setPassword(e.target.value); setErrorMessage('')})}
                />
                          <input 
                        type="file" 
                        accept='application/pdf' 
                        
                        name="resume"  
                        className="text-center w-full h-8 bg-white"
                        onChange={(e) => {setResume(e.target.files[0]); setErrorMessage('')}} 
                    />
            <label htmlFor="resume" className=' -mt-2'>Note: Only pdf accepted</label>
            <Button style={{backgroundColor: "green", color: "white", marginTop: "22px"}}
            onClick={handelSignUp}
            > { loading ? ('Loading...'): 'SignUp'} </Button>
             {errorMessage && <p className="text-red-500 text-center ">{errorMessage}</p>}
             {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            </div>
        </div>
    </div>
  )
}

export default Signup
