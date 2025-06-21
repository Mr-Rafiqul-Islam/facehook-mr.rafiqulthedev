import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user ? (
        <div>
          <Header />
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default PrivateRoutes;
