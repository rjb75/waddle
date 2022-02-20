import React from "react";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  const user = {
    name: "Andrea",
  };
  return (
    <div className="page-content dashboard">
      <h2>Dashboard</h2>

      <div className="message-area">
        <p>Welcome back</p>
        <h2>Andrea</h2>
      </div>
    </div>
  );
};

export default Dashboard;
