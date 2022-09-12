import React from "react";

export default function ShopSort(props) {

    const optionElement = props.categoriesName.map((e) => {
        return (
            <option key={e.id} value={e.id}>{e.name}</option>
        )
    })

    return (
        <div>
            <div className="sort-group">
                <div className="filter-default">
                    <input 
                    className="filter" 
                    id="filter-coupons" 
                    placeholder="Cauta magazine ..."
                    />
                </div>

                <div className="filter-default">
                    <select className="filter" id="sort-coupons" onChange={(e) => props.idSelected(e)}>
                        <option value="">Alege dupa categorie</option>
                        {optionElement}
                    </select>
                </div>
            </div>
        </div>
    )
}