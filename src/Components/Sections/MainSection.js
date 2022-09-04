import React, {useRef} from "react";
import CardMainSection from "./Cards/CardMainSection";
import ImageApp from "./Images/aplicatiemobil.png";
import ImageEco from "./Images/economiseste.png";
import ImageBalance from "./Images/balanta.png";
import ImageTansactions from "./Images/tranzactii.png";

export default function MainSection (props) {
    // Setup colors for each card 
    const cardColours = ["#9571b0","#43c065","#6c94c9","#d59b5b"]

    return (
        <div className="mainContainer">
            <CardMainSection 
                title = {"Aplicatie de mobil"}
                text = {"Bani inapoi la fiecare comanda online in magazinele partenere"}
                image = {ImageApp}
                backgroundColor = {cardColours[0]}
                onClick = {() => props.clickCashClub.current.scrollIntoView()}
            />

            <CardMainSection 
                title = {"Economiseste bani"}
                text = {"Bucura-te de mii de bonusuri in timp ce cumperi ceea ce iti doresti"}
                image = {ImageEco}
                backgroundColor = {cardColours[1]}
            />

            <CardMainSection 
                title = {"Comparator preturi"}
                text = {"Identifica cele mai bune preturi pentru tine, utilizand comparatorul de preturi"}
                image = {ImageBalance}
                backgroundColor = {cardColours[2]}
            /> 

            <CardMainSection 
                title = {"Tranzactii securizate"}
                text = {"Banii inapoi la fiecare comanda online in magazinele partenere"}
                image = {ImageTansactions}
                backgroundColor = {cardColours[3]}
            />  

        </div>
    )
}