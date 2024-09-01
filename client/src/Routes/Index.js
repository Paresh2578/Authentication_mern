import React from "react";
import { Link, Route, Routes } from "react-router-dom";

//pages
import Login from "../Pages/Login/Login";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/forgetPassword/ForgetPassword";
import ProtectedRoute from "./protectedRoute";

const Index = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/forgetPassword" element={ <ForgetPassword />} />
      <Route path="/" element={ <ProtectedRoute> <Layout /> </ProtectedRoute>}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  );
};

export default Index;
