import React from "react";
import DiscountImage1 from "../../Assets/Images/reduceri1.png"
import DiscountImage2 from "../../Assets/Images/reduceri2.png"
import DiscountImage3 from "../../Assets/Images/reduceri3.png"
import DiscountImage4 from "../../Assets/Images/reduceri4.png"
import DiscountImage5 from "../../Assets/Images/reduceri5.png"
import DiscountImage6 from "../../Assets/Images/reduceri6.png"

export default function DiscountSection() {
    return (
        <section className="discountContainer mainContainer">
            <div className="discountContent">
                <h3>Super reduceri zilnice la sute de produse</h3>
                <p>Economiseste bani si profita de cele mai mari reduceri la produsele si serviciile tale preferate!</p>
                <a href="#" className="generalButtons">Vezi promotii</a>
            </div>
            
            <div className="discountGrid">
                <img src={DiscountImage1} alt="" />
                <img src={DiscountImage2} alt="" />
                <img src={DiscountImage3} alt="" />
                <img src={DiscountImage4} alt="" />
                <img src={DiscountImage5} alt="" />
                <img src={DiscountImage6} alt="" />
            </div>
        </section>
    )
}