import React from "react";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    const user = {
        name: "Andrea"
    }

    return (
        <div className="page-content dashboard">
            <div className="message-area">
                <p>Welcome back</p>
                <h2>Andrea</h2>
            </div>
            <NavBar />
        </div>
    )
}

export default Dashboard;