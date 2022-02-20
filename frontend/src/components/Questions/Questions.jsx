import React, { useEffect, useState } from "react";
import axiosJSONInst from "../../AxiosJSON";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        axiosJSONInst
            .get("/questions")
            .then((res) => {
                setQuestions(res)
            })
            .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        console.log(questions)
    }, [questions, selectedQuestions])

    return (
        <div>

        </div>
    );
};

export default Questions;