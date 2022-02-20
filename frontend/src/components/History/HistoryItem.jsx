import React from "react";
import ArrowRight from "../../images/icons/arrow-right.svg";
import "./HistoryItem.scss";

const HistoryItem = (props) => {
    const {message, score, date} = props;
    const description = `You scored ${Math.floor(score * 100)}% on the scale. ${message}`;

    const handleViewMore = () => {
        // TODO: handle view more about history item
    }

    return (
        <div className="history-item flex-r">
            <div className="history-text flex-c">
                <p className="history-date text--black">{date}</p>
                <p className="history-description">{description}</p>
            </div>
            <img className="history-view-more" onClick={handleViewMore} src={ArrowRight} />
        </div>
    );
};

export default HistoryItem;