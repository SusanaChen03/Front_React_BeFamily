import React from "react";
import { Navigate , Route } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    console.log("sessionStoragegetItem:"+sessionStorage.getItem("logged"))
    isLoggedIn=sessionStorage.getItem("logged")
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;