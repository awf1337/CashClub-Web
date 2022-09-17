import React from "react";

export default function ConditionalRenderFilter(props) {
    const styledList = {
        position: "absolute",
        top: "3rem",
        background: "#f5f5f5",
        borderRadius: "10px",
        border: "solid 1px #232323",
        width: "100%",
        padding: ".5rem"
    }

    if(props.trigger && props.value){
        const filteredList = props.list.filter((item) => item.name.toString().toLowerCase().startsWith(props.value.toLowerCase()));

        const filteredListElement = filteredList.map((item,i) => {
            return (
                <div 
                key={i} 
                className= "searchItem" 
                onClick={() => {props.setDataDisplay(item.name); props.setTriggerOnClick()}}
                >{item.name}
                </div>
            )
        })
        return(
            <div style={styledList}>
                {filteredListElement}
            </div>
        )
    }
}