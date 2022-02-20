import React from "react";
import "./DashboardSections.scss";
import {HorizontalGridLines, VerticalBarSeries, XAxis, XYPlot} from 'react-vis';

const Happiness = () => {
    const happinessData =[{x: 0, y: 0.1}, {x: 1, y: 0.9}, {x: 2, y: 0.5}, {x: 3, y: 0.2}, {x: 4, y: 0.7}, {x: 5, y: 0.3}, {x: 6, y: 1.0}]
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return (
        <div className="dashboard-section happiness">
            <div className="section-header">
            <p className="title">Happiness</p>
                <p>Take a look at your score from the past week. Your wadle will recieve this data so they can support you!</p>
            </div>
            <div className="section-body flex-c">
                <XYPlot className={'happiness-plot'} width={275} height={180} >
                    <HorizontalGridLines tickTotal={3} />
                    <XAxis tickFormat={v => days[v]} tickSize={0} />
                    <VerticalBarSeries barWidth={.5} className="happiness-bars" color={'#499FB7'} data={happinessData} />
                </XYPlot>
                <div className="btn btn-primary--blue-dark">Read detailed analytics</div>
            </div>
        </div>
    );
};

export default Happiness;