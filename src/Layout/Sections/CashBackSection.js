import React from "react";
import Image1 from "../../Assets/Images/carousel1.png"
import Image2 from "../../Assets/Images/carousel2.png"
import Image3 from "../../Assets/Images/carousel3.png"
import Image4 from "../../Assets/Images/carousel4.png"
import Image5 from "../../Assets/Images/carousel5.png"
import Image6 from "../../Assets/Images/carousel6.png"

export default function CashBackSection() {
    return (
        <section className="cashBackContainer">
            <div className="cashBackContent">
                <h3>CashBack in peste 800 de magazine partenere</h3>
                
                <p>Primesti bani inapoi la fiecare comanda in site-urile partenere</p>

                <div className="cashBackButtonsContainer">
                    <a
                        className="generalButtons"
                        href="localgost:3000"
                    >Afla mai multe</a>
                    <a
                        className="generalButtons transparentBotton"
                        href="localgost:3000"
                    >Magazine partenere</a>
                </div>
            </div>
            
            <div className="cashBackCarousel">
                    <div className="carouselContainer" style={{animation:"50000ms linear 0s infinite normal none running moveAnimation"}}>
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