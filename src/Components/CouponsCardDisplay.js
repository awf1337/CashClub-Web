import React from "react";

export default function CouponsCardDisplay(props) {
    return (
            <div className="couponsListItem">
                <a href="/login">
                    <div className="couponsListItemWrapper">
                        <div className="couponsListItemImg">
                            <img src={props.logo} alt="Coupon" />
                        </div>

                        <div className="couponsListItemDiscount">
                            <p>{props.title}</p>
                        </div>

                        <div className="couponsListItemCode">
                            <p>Afiseaza codul</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}