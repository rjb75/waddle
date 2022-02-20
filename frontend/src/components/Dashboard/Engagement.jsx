import React from "react";
import "./DashboardSections.scss";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import { PieChart, Pie, Cell } from "recharts";
import CalendarIcon from "../../images/icons/calendar.svg";
import SmileIcon from "../../images/icons/smile.svg";
import BookIcon from "../../images/icons/book.svg";

const Engagement = () => {
  const myData = [{ angle: 1 }];

  const happinessData = [
    { x: 0, y: 0 },
    { x: 1, y: 7 },
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
  ];

  const completedThisWeek = 4;
  const completedData = [
    { name: "Completed", value: completedThisWeek, visible: true },
    { name: "Not Completed", value: 7 - completedThisWeek, visible: false },
  ];

  return (
    <div className="dashboard-section engagement">
      <div className="section-header">
        <p className="title">Engagement</p>
        <p>Your activity from the past few weeks!</p>
      </div>
      <div className="section-body">
        <div className="flex-c">
          <p className="text--black text-i text-a-c">This week</p>
          <div className="flex-r">
              <div className="engagement-chart-container">
              <PieChart className="engagement-chart" width={125} height={125}>
                <Pie
                    data={completedData}
                    startAngle={90}
                    endAngle={450}
                    innerRadius={45}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {
                        completedData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.visible ? "#F49E4C" : "#FFFFFF"}
                        />
                        ))
                    }
                </Pie>
                </PieChart>
                <p className="text-b text--black engagement-chart-label">{completedThisWeek}/7</p>
              </div>
            <div className="flex-c metrics">
              <div className="flex-r metric-fact">
                <img src={CalendarIcon} className="metric-icon" />
                <p className="text--black metric-text">{7 - completedThisWeek} more days to go!</p>
              </div>
              <div  className="flex-r metric-fact">
                <img src={SmileIcon} className="metric-icon" />
                <p className="text--black metric-text">You scored 88% on the Happiness Scale</p>
              </div>
              <div className="flex-r metric-fact">
                <img src={BookIcon} className="metric-icon" />
                <p className="text--black metric-text">
                  90% of your peers accessed your score
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <XYPlot
            className={"engagement-history-plot"}
            width={275}
            height={180}
          >
            <HorizontalGridLines tickTotal={3} />
            <XAxis tickFormat={(v) => happinessData.length - v} tickSize={0} />
            <YAxis />
            <VerticalBarSeries
              barWidth={0.5}
              className="engagement-history-bars"
              color={"#AB3428"}
              data={happinessData}
            />
          </XYPlot>
          <p className="text-i text-a-c">Weeks ago</p>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
