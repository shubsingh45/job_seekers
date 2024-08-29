import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import {useSelector} from 'react-redux'
import { presentCurrentUser } from './redux/userSlice';

function App() {
  const currentUser = useSelector(presentCurrentUser)
  return (
    <div className=" min-h-screen w-full bg-slate-200">
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/signup" />}
          />
        <Route
            path="/signup"
            element={currentUser ? <Navigate to="/" /> : <Signup />}
          />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
