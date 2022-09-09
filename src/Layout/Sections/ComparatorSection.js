import React from "react";

export default function ComparatorSection(props) {
    return (
        <section className="comparatorContainer">
            <h3>Compara preturile la peste {"1.600.000"} de produse</h3>
            <p>Identifica cele mai bune preturi pentru tine, printr-un simplu click!</p>
            <a 
                href="localhost:3000" 
                className="generalButtons"
            >Comparator preturi</a>
            {props.mediaMatches && 
                <a 
                    href="localhost:3000" 
                    className="generalButtons"
                >Magazine partenere</a>
            }
            {/* dynamic carousel */}
        </section>
    )
}