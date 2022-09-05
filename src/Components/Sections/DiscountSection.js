import React from "react";
import Image1 from "./Images/reduceri1.png"
import Image2 from "./Images/reduceri2.png"
import Image3 from "./Images/reduceri3.png"
import Image4 from "./Images/reduceri4.png"
import Image5 from "./Images/reduceri5.png"
import Image6 from "./Images/reduceri6.png"

export default function DiscountSection() {
    return (
        <section className="discountContainer mainContainer">
            <h3>Super reduceri zilnice la sute de produse</h3>
            <p>Economiseste bani si profita de cele mai mari reduceri la produsele si serviciile tale preferate!</p>
            <a href="#" className="generalButtons">Vezi promotii</a>

            <div className="discountGrid">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
            </div>
        </section>
    )
}