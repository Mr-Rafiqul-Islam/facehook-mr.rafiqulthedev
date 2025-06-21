import React from "react";
import Header from "../components/common/Header";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Header />
      <h2 className="text-5xl">welcome to bangladesh</h2>
    </div>
  );
}
