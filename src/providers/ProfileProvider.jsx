import React, { useReducer } from "react";
import { ProfileContext } from "../contexts";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
