import React from "react";
import logoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate()
  return (
    <button className="icon-btn" onClick={()=>navigate('/login')}>
      <img src={logoutIcon} alt="Logout" />
    </button>
  );
}
