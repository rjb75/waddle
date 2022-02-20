import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./Dashboard.scss";
import DashboardBg from "../images/dashboard-background.svg";
import Engagement from "../components/Dashboard/Engagement";
import Happiness from "../components/Dashboard/Happiness";
import Support from "../components/Dashboard/Support";
import Questions from "../components/Questions/Questions";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { selectNickname } from "../app/reducers/UserSlice";

const Dashboard = () => {
  const [questionModal, setQuestionModal] = useState(false);

  const handleQuestionSubmit = () => {
    setQuestionModal(false);
  };

  const user = {
    name: useSelector(selectNickname),
  };

  const dailyTip =
    "Take a breath. Step outside and inhale and exhale for 1 minute.";

  return (
    <div className="page-content dashboard flex-c">
      <div className="message-area">
        <img className="dashboard-bg" alt="" src={DashboardBg} />
        <div className="dashboard-text flex-c">
          <p className="dashboard-name">{user.name}</p>
          <p className="dashboard-message">Start your day with Wadle</p>
        </div>
      </div>
      <div className="flex-c complete-questions">
        <p
          className="btn btn-primary--red-dark text-a-c"
          onClick={() => setQuestionModal(true)}
        >
          Complete your Check In
        </p>
        <ReactModal isOpen={questionModal}>
          <Questions onClose={handleQuestionSubmit} />
        </ReactModal>
      </div>
      <div className="daily-tip">
        <div className="tip-container">
          <div className="tip-box">
            <p className="tip-tag">Tip of the Day</p>
            <p className="tip-text">{dailyTip}</p>
          </div>
        </div>
      </div>
      <Happiness />
      <Engagement />
      <Support needed={0.8} received={0.2} />
      <div className="dashboard-section motivation">
        <p className="title">Motivation</p>
        <p>
          Based on your results, lets see how much motivation you have to do
          basic activities and work.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
