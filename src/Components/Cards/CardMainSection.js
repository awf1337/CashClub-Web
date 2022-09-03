import React from "react";

export default function CardMainSection (props) {
    return (
        <div className="cardContainer">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            {/* <img /> */}
        </div>
    )
}