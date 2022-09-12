import React from "react";

export default function ShopCardDisplay(props) {
    return (
            <div className="couponsListItem">
                <a href="/login">
                    <div className="shopListItemWrapper">
                        <div className="shopListItemImg">
                            <img src={props.logo} alt="Coupon" />
                        </div>

                        <div className="shopListItemCode">
                            <p>{props.discount} cashback</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}