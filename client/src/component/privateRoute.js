import { useSelector } from "react-redux";
import { presentCurrentUser } from "../redux/userSlice";
import { Navigate, Outlet } from "react-router-dom";



const PrivatePage = () => {
 const currentUser = useSelector(presentCurrentUser)
 
 return currentUser?.isVerified ? <Outlet/> : <Navigate to={'/signup'}/>

}

export default PrivatePage