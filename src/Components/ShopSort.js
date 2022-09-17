import React, {useState} from "react";
import ConditionalRenderFilter from "./ConditionalRenderFilter";

export default function ShopSort(props) {
    const [toogle, setToogle] = useState(false)

    const optionElement = props.categoriesName.map((e) => {
        return (
            <option key={e.id} value={e.id}>{e.name}</option>
        )
    })

    return (
        <div>
            <div className="sort-group">
                <div className="filter-default searchField">
                    <input 
                    value={props.inputValue}
                    className="filter" 
                    id="filter-coupons" 
                    placeholder="Cauta magazine ..."
                    onChange = {(e) => {props.valueField(e); setToogle(true)}}
                    />

                    <ConditionalRenderFilter 
                    trigger = {toogle}
                    setTriggerOnClick = {() => {setToogle(false); props.cleanField()}}
                    list = {props.shopList}
                    value = {props.inputValue}
                    setDataDisplay = {(e) => props.setDataDisplay(e)}
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