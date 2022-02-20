import React from "react";
import NavBar from "../components/NavBar";
import "./Dashboard.scss";
import DashboardBg from "../images/dashboard-background.svg";

const Dashboard = () => {
    const user = {
        name: "Andrea",
    };

    const dailyTip = "Take a breath. Step outside and inhale and exhale for 1 minute.";

    return (
        <div className="page-content dashboard flex-c">
            <div className="message-area">
                <img className="dashboard-bg" alt="" src={DashboardBg} />
                <div className="dashboard-text flex-c">
                    <p className="dashboard-name">{user.name}</p>
                    <p className="dashboard-message">Start your day with Wadle</p>
                </div>
            </div>
            <div className="daily-tip">
                <div className="tip-container">
                    <div className="tip-box">
                        <p className="tip-tag">Tip of the Day</p>
                        <p className="tip-text">{dailyTip}</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-section happiness">
                <p className="title">Happiness</p>
                <p>Take a look at your score from the past week. Your wadle will recieve this data so they can support you!</p>
            </div>
            <div className="dashboard-section engagement">
                <p className="title">Engagement</p>
                <p>Your activity from the past few weeks!</p>
            </div>
            <div className="dashboard-section support">
                <p className="title">Support Needed</p>
                <p>How much support you currently need?</p>
            </div>
            <div className="dashboard-section motivation">
                <p className="title">Motivation</p>
                <p>Based on your results, lets see how much motivation you have to do basic activities and work.</p>
            </div>
        </div>
    )
}

export default Dashboard;
