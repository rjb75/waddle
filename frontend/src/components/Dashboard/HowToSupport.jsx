import React from "react";
import RunIcon from "../../images/icons/run.svg";
import CheckIcon from "../../images/icons/check.svg";
import EatIcon from "../../images/icons/food.svg";
import TVIcon from "../../images/icons/tv.svg";

const HowToSupport = () => {
    const supportItems = [{
        text: "Take a Run Together",
        icon: RunIcon
    }, {
        text: "Validate what they say!",
        icon: CheckIcon
    }, {
        text: "Propose a  meal",
        icon: EatIcon
    }, {
        text: "Netflix and Chill",
        icon: TVIcon
    }]

    return (
        <div className="dashboard-section htsupport">
            <div className="section-header">
                <p className="title">How to support</p>
                <p>We have created a set of tips for both you and your pal. Take a look and try them out!</p>
            </div>
            <div className="section-body flex-r">
                {
                    supportItems.map((e) => {
                        return (
                            <div className="support-item-card flex-c">
                                <img src={e.icon} />
                                <p className="text--white">{e.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HowToSupport;