import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/farmer/Dashboard";

import Training from "./pages/farmer/Training";
import Admin from "./pages/admin/Admin";
import UpdateTraining from "./pages/admin/UpdateTraining";
import Users from "./pages/admin/Users";
import MainContext, { MainStateContext } from "./MainContext";
import TeaCenters from "./pages/admin/TeaCenters";
import ChatAdmin from "./pages/admin/ChatAdmin";
import ChatFarmer from "./pages/farmer/ChatFarmer";
import Sales from "./pages/admin/Sales";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminLogin from "./pages/AdminLogin";
import MakeSale from "./pages/admin/MakeSale";
import AgentLogin from "./pages/agent/AgentLogin";
import AgentMakeSale from "./pages/agent/AgentMakeSale";
import PrivateRoute from "./PrivateRoute";
import AgentSales from "./pages/agent/AgentSales";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <MainContext>
        <Routes>
          {/* path to registration page */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* path to login page */}
          <Route path="/" element={<Home />} />
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<Dashboard />}></Route>

          <Route
            path="/Training"
            element={
              <PrivateRoute>
                <Training />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/UpdateTraining"
            element={
              <PrivateRoute>
                <UpdateTraining />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/centers"
            element={
              <PrivateRoute>
                <TeaCenters />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/ChatAdmin"
            element={
              <PrivateRoute>
                <ChatAdmin />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/ChatFarmer"
            element={
              <PrivateRoute>
                <ChatFarmer />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Sales"
            element={
              <PrivateRoute>
                <Sales />
              </PrivateRoute>
            }
          ></Route>
          {/* <Route path="/AgentSaless" element={<Sales />}></Route> */}
          <Route path="AdminProfile" element={<AdminProfile />}></Route>

          {/* agent routes */}
          {/* <Route path="/agent" element={<Admin />}></Route> */}
          <Route path="/agent/login" element={<AgentLogin />}></Route>
          <Route
            path="/agent/make_sale"
            element={
              <PrivateRoute>
                <AgentMakeSale />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/agent/sales"
            element={
              <PrivateRoute>
                <AgentSales />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </MainContext>
    </BrowserRouter>
  );
}

export default App;
