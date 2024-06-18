
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter overflow-hidden">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/about" element={<About isLoggedIn={isLoggedIn}/>} />
          <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn}/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>

              <Dashboard />

            </PrivateRoute>} />
          
        </Routes>
      </div>
    </>
  );
};

export default App;
