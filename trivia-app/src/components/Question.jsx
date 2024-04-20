import React, { useEffect, useState } from "react";
import './../App.css'

const Question = ({question, i}) => {
    const [ans, setAns] = useState([])

    useEffect(() => {
        let choices = []
        choices.push(question.correctAnswer)
        question.incorrectAnswers.forEach((incorrectAnswer) => {
            choices.push(incorrectAnswer)
        })
        shuffleArray(choices)
        setAns(choices)
    }, [])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <>
            <h2>{question.question.text}</h2>
                <select className="s" onChange={() => {
                        console.log(question.correctAnswer)
                        if (document.getElementsByClassName("s")[i].value === question.correctAnswer) {
                            console.log(document.getElementsByTagName("h2"))
                            document.getElementsByTagName("h2")[i].className = "right";
                        } else {
                            document.getElementsByTagName("h2")[i].className = "head";
                        }
                    }}>
                    {ans.map((ans, index) => (
                        <option key={index}>{ans}</option>
                    ))}
                    <option>{question.correctAnswer}</option>
                </select>
        </>
    )
}

export default Question;