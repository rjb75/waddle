import React from "react";
import "./DashboardSections.scss";
import { PieChart, Pie, Cell } from "recharts";

const Support = (props) => {

    const {needed = 0, received = 0} = props;

    const neededString = needed >= 0 ? Math.floor(needed * 100).toString() + '%' : 'Not enough data';
    const receivedString = received >= 0 ? Math.floor(received * 100).toString() + '%' : 'Not enough data';

    const neededData = [
        { name: "Completed", value: needed, visible: true },
        { name: "Not Completed", value: 1 - needed, visible: false },
    ];

    const receivedData = [
        { name: "Completed", value: received, visible: true },
        { name: "Not Completed", value: 1 - received, visible: false },
    ];

    return (
        <div className="dashboard-section support">
            <div className="section-header" >
                <p className="title">Support Needed</p>
                <p>How much support you currently need?</p>
            </div>
            <div className="section-body flex-r">
                <div>
                    <PieChart className="engagement-chart" width={125} height={125}>
                        <Pie
                            data={neededData}
                            startAngle={0}
                            endAngle={360}
                            outerRadius={60}
                            dataKey="value"
                        >
                            {
                                neededData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.visible ? "#F49E4C" : "#FFFFFF"}
                                />
                                ))
                            }
                        </Pie>
                    </PieChart>
                    <div>
                        <p className="text-a-c">{neededString}</p>
                        <p className="text-a-c">Support Needed</p>
                    </div>
                </div>
                <div>
                    <PieChart className="engagement-chart" width={125} height={125}>
                        <Pie
                            data={receivedData}
                            startAngle={0}
                            endAngle={360}
                            outerRadius={60}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {
                                receivedData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.visible ? "#3B8EA5" : "#FFFFFF"}
                                />
                                ))
                            }
                        </Pie>
                    </PieChart>
                    <div>
                        <p className="text-a-c">{receivedString}</p>
                        <p className="text-a-c">Support Received</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;