import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { presentCurrentUser, RemoveUserSuccess } from '../redux/userSlice'
import axios from 'axios'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const  currentUser = useSelector(presentCurrentUser)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout = async() => {
    try {
      const res = await axios.post("https://job-seekers-6epj.onrender.com/logout",{}, {withCredentials: true})
      if(res.status === 200){
         localStorage.removeItem('token')
           dispatch(RemoveUserSuccess())
            alert(res.data.message)
            navigate('/')
            setLoading(false)
    }else{
        console.log(res.data.message)
        setLoading(false)
    }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message)
    } else {
        console.log(error.message);
    }
    }
  }

  return (
    <div>
      <div className=" flex flex-col justify-center items-center w-full mt-16">
        <h1 className=' text-2xl font-semibold text-center text-green-500'>Hi, {currentUser.name} you have a successfully created account</h1>
        <Button style={{backgroundColor: "green", color: "white", marginTop: "22px", width: "80px"}}
            onClick={handleLogout}
            > { loading ? ('Loading...'): 'SignUp'} </Button>

      </div>
    </div>
  )
}

export default Home
