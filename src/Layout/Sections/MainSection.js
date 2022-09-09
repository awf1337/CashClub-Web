import React from "react";
import CardMainSection from "./Cards/CardMainSection";
import ImageApp from "../../Assets/Images/aplicatiemobil.png";
import ImageEco from "../../Assets/Images/economiseste.png";
import ImageBalance from "../../Assets/Images/balanta.png";
import ImageTansactions from "../../Assets/Images/tranzactii.png";

export default function MainSection (props) {
    // Setup colors for each card 
    const cardColours = ["#9571b0","#43c065","#6c94c9","#d59b5b"]
    const style = {
        animation: props.mediaMatches && "50000ms linear 0s infinite normal none running moveAnimation"
    };

    return (
        <div className={!props.mediaMatches ? "mainContainer" : ""}>
            <div className="cashBackCarousel">
                <div className={props.mediaMatches ? "carouselContainer" : ""} style={style}>
                    <div className="slide1">
                        <CardMainSection 
                            title = {"Aplicatie de mobil"}
                            text = {"Bani inapoi la fiecare comanda online in magazinele partenere"}
                            image = {ImageApp}
                            backgroundColor = {cardColours[0]}
                            onClick = {() => props.clickCashClub.current.scrollIntoView()}
                        />
                    </div>
                    <div className="slide1">
                        <CardMainSection 
                            title = {"Economiseste bani"}
                            text = {"Bucura-te de mii de bonusuri in timp ce cumperi ceea ce iti doresti"}
                            image = {ImageEco}
                            backgroundColor = {cardColours[1]}
                        />
                    </div>
                    <div className="slide1">
                        <CardMainSection 
                            title = {"Comparator preturi"}
                            text = {"Identifica cele mai bune preturi pentru tine, utilizand comparatorul de preturi"}
                            image = {ImageBalance}
                            backgroundColor = {cardColours[2]}
                        /> 
                    </div>
                    <div className="slide1">
                        <CardMainSection 
                            title = {"Tranzactii securizate"}
                            text = {"Banii inapoi la fiecare comanda online in magazinele partenere"}
                            image = {ImageTansactions}
                            backgroundColor = {cardColours[3]}
                        /> 
                    </div>
                    {props.mediaMatches && 
                        <>
                        <div className="slide1">
                            <CardMainSection 
                                title = {"Aplicatie de mobil"}
                                text = {"Bani inapoi la fiecare comanda online in magazinele partenere"}
                                image = {ImageApp}
                                backgroundColor = {cardColours[0]}
                                onClick = {() => props.clickCashClub.current.scrollIntoView()}
                            />
                        </div>
                        <div className="slide1">
                            <CardMainSection 
                                title = {"Economiseste bani"}
                                text = {"Bucura-te de mii de bonusuri in timp ce cumperi ceea ce iti doresti"}
                                image = {ImageEco}
                                backgroundColor = {cardColours[1]}
                            />
                        </div>
                    </>
                    }   
                </div> 
            </div>
        </div>
    )
}