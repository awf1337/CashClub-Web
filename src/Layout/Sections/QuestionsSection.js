import React from "react";

export default function QuestionsSection() {
    return (
        <div 
            onClick={() => window.open("/frequent-questions","_self")}
            className="questionContainer"
        >
            <h3>Intrebari frecvente</h3>
        </div>
    )
}