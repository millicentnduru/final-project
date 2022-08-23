import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/farmer/Dashboard";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Training from "./pages/farmer/Training";
import Admin from "./pages/admin/Admin";
import UpdateTraining from "./pages/admin/UpdateTraining";
import Users from "./pages/admin/Users";
// import MainContext, { MainStateContext } from "./MainContext";
import TeaCenters from "./pages/admin/TeaCenters";
import ChatAdmin from "./pages/admin/ChatAdmin";
import ChatFarmer from "./pages/farmer/ChatFarmer";
import Sales from "./pages/admin/Sales";

import { useState } from "react";


function App() {
  



  return (
    
    <BrowserRouter>
      <Routes>
        {/* path to registration page */}
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* path to login page */}
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path ="/Chat" element={<Chat/>}></Route>
        <Route path ="/Training" element={<Training/>}></Route>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/Admin" element ={<Admin/>}></Route>
        <Route path="/UpdateTraining" element={<UpdateTraining/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>  
        <Route path="/centers" element={<TeaCenters/>}></Route> 
        <Route path="/ChatAdmin" element={<ChatAdmin/>}></Route> 
        <Route path="/ChatFarmer" element={<ChatFarmer/>}></Route> 
        <Route path="/Sales" element={<Sales/>}></Route> 
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

