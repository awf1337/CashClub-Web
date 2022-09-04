import React from "react";

export default function CardMainSection (props) {
    return (
        <div className="cardContainer" style={{backgroundColor:`${props.backgroundColor}`}}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.image} alt="" />
        </div>
    )
}