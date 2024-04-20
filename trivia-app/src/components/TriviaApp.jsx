import React, { useEffect, useState } from "react";
import './../App.css'
import Question from "./Question";

const TriviaApp = () => {
    const [questions, setQuestions] = useState(null);
    const [ans, setAns] = useState([])

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions");
            const data = await response.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    return (
        <>
            <h1>Trivia App</h1>
            {questions && questions.map((question, index) => (
                <Question key={index} i={index} question={question}></Question>
            ))}
        </>
    );
};

export default TriviaApp;