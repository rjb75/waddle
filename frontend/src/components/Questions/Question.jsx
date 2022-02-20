import React, { useState } from "react";
import {QuestionTypes} from './QuestionConstants';
import TextField from '../Inputs/TextField';
import Picker from 'emoji-picker-react';
import './Questions.scss';

const Question = (props) => {
    const {type, question} = props;
    const [answer, setAnswer] = useState([]);

    const handleEmojiSelect = (e, emoji) => {
        setAnswer(answer => [...answer, emoji]);
    };

    return  (
        <div className="question-component text--black text-a-c">
            <p className="question-text">{question}</p>
            {
                type == QuestionTypes.keyword ?
                <TextField type="text" placeholder="Enter Your Response" /> :
                <Picker onEmojiClick={handleEmojiSelect}/>
            }
        </div>
    );
};

export default Question;