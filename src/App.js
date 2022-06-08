import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        {/* path to registration page */}
        <Route path="/register" element={<Register/>}/>
        {/* path to login page */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <button type="">
    //     To register
    //   </button>

    //   <Login/>
    //   <Register/>
    // </div>
  );
}

export default App;
// To achive react routing:
//  install a package called "react-router-dom" - npm install react-router-dom
//  in the app.js import {BrowserRouter, Routes, Route} from "react-router-dom"
