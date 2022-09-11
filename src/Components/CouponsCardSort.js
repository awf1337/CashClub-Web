import React from "react";

export default function CouponsCard({couponsName}) {
    const optionsComponent = couponsName.map((e,i) => {
        return (
            <option key={i}>{e}</option>
        )
    })

    return (
        <div>
            <div className="sort-group">
                <div className="filter-default">
                    <select className="filter" id="filter-coupons">
                        <option value="all">Toate cupoanele</option>
                        { optionsComponent }
                    </select>
                </div>

                <div className="filter-default">
                    <select className="filter" id="sort-coupons">
                        <option value="default">Sorteaza</option>
                        <option>Cele mai populare</option>
                        <option>Expira in curand</option>
                        <option>Valuarea reducerii</option>
                    </select>
                </div>
            </div>
        </div>
    )
}