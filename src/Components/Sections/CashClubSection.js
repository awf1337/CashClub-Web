import React from "react";
import ImageCashClubMobil from "./Images/cashClubMobil.png"

export default function CashClub(props) {
    return (
        <section 
        className="cashClubContainer"
        ref={props.myRef}
        >
            <h3>CashClub pe mobil</h3>
            <p> Descarca aplicatia pe mobil si printr-un simplu click ai acces la 800 de magazine, 
                milioane de produse si mii de bonusuri.</p>
            <img src={ImageCashClubMobil} alt="This application on a mobile display"/>
            <a 
                href="https://play.google.com/store/apps/details?id=m.cashclub.ro" 
                className="generalButtons"
                target="_blank"
            >Descarca</a>
        </section>
    )
}