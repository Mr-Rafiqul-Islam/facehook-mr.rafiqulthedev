import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.authToken ? (
        <PostProvider>
          <ProfileProvider>
            <div>
              <Header />
              <Outlet />
            </div>
          </ProfileProvider>
        </PostProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default PrivateRoutes;
