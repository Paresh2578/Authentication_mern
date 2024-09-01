import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let user = JSON.parse(sessionStorage.getItem("user"));
  if (user == null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;