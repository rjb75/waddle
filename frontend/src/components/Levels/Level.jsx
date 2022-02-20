import React, { useEffect, useState } from "react";
import { LevelInformation } from "./LevelConstants";
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './Level.scss'

const Level = (props) => {
    const {initLevel = 1, onLevelChange} = props;
    const [currentLevel, setCurrentLevel] = useState(initLevel);

    const icon = LevelInformation[currentLevel].icon;
    const description = LevelInformation[currentLevel].description;
    const text = LevelInformation[currentLevel].name;

    const marks = { 1: '', 2:'', 3: '' }

    useEffect(() => {
        onLevelChange && onLevelChange(currentLevel);
    }, [currentLevel])

    return (
        <div className="flex-c level-container">
            <h2 className="text-a-c">Change your level</h2>
            <div className="flex-r level-control-container">
                <div className="slider-container">
                    <Slider vertical min={1} step={1} max={3} marks={marks} onChange={(v) => setCurrentLevel(v)}/>
                </div>
                <img src={icon} />
            </div>
            <h3 className="text-a-c">{text}</h3>
            <p className="text-a-c level-description">{description}</p>
        </div>
    );
};

export default Level;