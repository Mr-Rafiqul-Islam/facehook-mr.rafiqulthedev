import React from "react";
import Header from "../components/common/Header";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div className="container">
      <Link to="/me">Go to Profile</Link>
      <h2 className="text-5xl">welcome to bangladesh</h2>
    </div>
  );
}
