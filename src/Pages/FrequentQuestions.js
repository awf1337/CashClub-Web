import React from "react";
import question from "../questionsData.js"
import { useState } from "react";

export default function FrequentQuestions() {
    const [questionsData,setquestionsData] = useState(question.map((el) => {
        return {...el,isHidden:true}
    }));

    function hiddenToggle(questionIndex) {
        const copyQuestionData = JSON.parse(JSON.stringify(questionsData));
        copyQuestionData[questionIndex].isHidden = !copyQuestionData[questionIndex].isHidden
        setquestionsData(copyQuestionData)
    }

    const questionElement = questionsData.map((questionEl,questionIndex) => {
        return (
            <div 
                className="question-div" 
                key={questionIndex}
                id={questionIndex}
                onClick={() => hiddenToggle(questionIndex)}
            >
                <div>
                    <span>{questionEl.question}</span>
                    <p className={questionEl.isHidden ? "hiddenAnswer" : "visibleAnswer"}>{questionEl.answer}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="mainContainer">
            <h2 style={{"marginBottom":"4rem"}}>Intrebari frecvente</h2>
            {questionElement}
        </div>
    )
}