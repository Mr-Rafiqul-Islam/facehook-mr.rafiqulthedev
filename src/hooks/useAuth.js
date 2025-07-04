import React, { useContext, useDebugValue } from "react";
import { AuthContext } from "../contexts";


export default function useAuth() {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged In" : "User Logged Out"
  );
  return useContext(AuthContext);
}
