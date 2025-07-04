import React from "react";
import logoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="Logout" />
    </button>
  );
}
