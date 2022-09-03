import React from "react";
import CardMainSection from "../Cards/CardMainSection";

export default function MainSection () {
    return (
        <div className="mainContainer">
            <CardMainSection 
                title = {"Aplicatie de mobil"}
                text = {"Bani inapoi la fiecare comanda online in magazinele partenere"}
            />

            <CardMainSection 
                title = {"Economiseste bani"}
                text = {"Bucura-te de mii de bonusuri in timp ce cumperi ceea ce iti doresti"}
            />

            <CardMainSection 
                title = {"Comparator preturi"}
                text = {"Identifica cele mai bune preturi pentru tine, utilizand comparatorul de preturi"}
            /> 

            <CardMainSection 
                title = {"Tranzactii securizate"}
                text = {"Banii inapoi la fiecare comanda online in magazinele partenere"}
            />  

        </div>
    )
}