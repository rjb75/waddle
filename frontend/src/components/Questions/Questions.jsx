import React, { useEffect, useState } from "react";
import axiosJSONInst from "../../AxiosJSON";
import Question from "./Question";

const Questions = (props) => {
    const {onClose} = props;
    const [questions, setQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        axiosJSONInst
            .get("/questions")
            .then((res) => {
                setQuestions(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        if(questions.length > 0) {
            const rand1 = Math.floor(Math.random() * (questions.length - 1))
            const rand2 = Math.floor(Math.random() * (questions.length - 1))
            const rand3 = Math.floor(Math.random() * (questions.length - 1))
            setSelectedQuestions([questions[rand1], questions[rand2], questions[rand3]])
        }
    }, [questions])

    const handleSubmit = () => {
        onClose()
    }

    return (
        <div>
            {
                selectedQuestions && <div>
                    { selectedQuestions[0] && <Question {...selectedQuestions[0]} />}
                    { selectedQuestions[1] && <Question {...selectedQuestions[1]} />}
                    { selectedQuestions[2] && <Question {...selectedQuestions[2]} />}
                </div>
            }
            <p className="btn btn-primary--blue-vibrant" onClick={handleSubmit} >Submit Questions</p>
        </div>
    );
};

export default Questions;