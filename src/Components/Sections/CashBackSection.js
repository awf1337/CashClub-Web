import React from "react";
import Image1 from "./Images/carousel1.png"
import Image2 from "./Images/carousel2.png"
import Image3 from "./Images/carousel3.png"
import Image4 from "./Images/carousel4.png"
import Image5 from "./Images/carousel5.png"
import Image6 from "./Images/carousel6.png"

export default function CashBackSection() {
    return (
        <section className="cashBackContainer">
            <h3>CashBack in peste 800 de magazine partenere</h3>
            
            <p>Primesti bani inapoi la fiecare comanda in site-urile partenere</p>

            <div className="cashBackButtonsContainer">
                <a
                    className="generalButtons"
                    href="#"
                >Afla mai multe</a>
                <a
                    className="generalButtons transparentBotton"
                    href="#"
                >Magazine partenere</a>
            </div>

            <div className="cashBackCarousel">
                    <div className="carouselContainer" style={{animation:"50000ms linear 0s infinite normal none running moveAnim-hp-clients"}}>
                        <div className="slide">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="slide">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="slide">
                            <img src={Image3} alt="" />
                        </div>
                        <div className="slide">
                            <img src={Image4} alt="" />
                        </div>
                        <div className="slide">
                            <img src={Image5} alt="" />
                        </div>
                        <div className="slide">
                            <img src={Image6} alt="" />
                        </div>
                    </div>
            </div>
        </section>
    )
}