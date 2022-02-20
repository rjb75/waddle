import React, { useState } from "react";
import "./PeerItem.scss";
import Pencil from "../../images/icons/pencil.svg";
import ReactModal from 'react-modal';
import Level from '../Levels/Level'

const PeerItem = (props) => {
    const {name, description, icon} = props;

    const [iceBerg, setIceBerg] = useState(false);

    return (
        <div className="history-item flex-r">
            <div className="history-text flex-c">
                <p className="history-date text--black">{name}</p>
                <p className="history-description">{description}</p>
            </div>
            <img className="history-view-more" onClick={() => setIceBerg(true)} src={Pencil} />
            <ReactModal isOpen={iceBerg}>
                <Level />
                <p className="btn btn-primary--blue-vibrant" onClick={() => setIceBerg(false)}>Close</p>
            </ReactModal>
        </div>
    );
};

export default PeerItem;