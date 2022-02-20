import React from "react";
import HistoryItem from "../components/History/HistoryItem";
import "./History.scss";

const History = () => {
  return (
    <div className="page-content history">
      <h2 className="page-header text-a-c">History</h2>
      <div className="page-body history-listing">
        <HistoryItem message="hi" score={0.8} date={"today"} />
      </div>
    </div>
  );
};

export default History;
