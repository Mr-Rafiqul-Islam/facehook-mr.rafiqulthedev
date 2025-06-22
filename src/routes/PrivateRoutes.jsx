import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.authToken ? (
        <ProfileProvider>
          <div>
            <Header />
            <Outlet />
          </div>
        </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default PrivateRoutes;
