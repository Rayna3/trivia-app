import React, { useEffect, useState } from "react";
import './../App.css'

const TriviaApp = () => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions");
            const data = await response.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <>
            <h1>Trivia App</h1>
            {questions && questions.map((question, index) => (
                <>
                    <h2 key={index} id={index}>{question.question.text}</h2>
                        <select id="s" onChange={() => {
                                if (document.getElementById("s").value === question.correctAnswer) {
                                    document.getElementById({index}).className = "right"
                                }
                            }}>
                            {question.incorrectAnswers.map((ans, index) => (
                                <option key={index}>{ans}</option>
                            ))}
                            <option>{question.correctAnswer}</option>
                        </select>
                </>
            ))}
        </>
    );
};

export default TriviaApp;