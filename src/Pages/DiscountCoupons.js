import React, {useState,useEffect} from "react";
import CouponsCardSort from "../Components/CouponsCardSort";
import CouponsCardDisplay from "../Components/CouponsCardDisplay";

export default function DiscountCoupons() {
    const [coupons, setCoupons] = useState([])
    const [concatCoupons, setConcatCoupons] = useState([])
    const [shopsName, setShopsName] = useState([])
    const [disableButton, setDisableButton] = useState(false)

    async function getShopData() {
        const res = await fetch("https://api.cashclub.ro/api/coupons/shops");
        const data = await res.json();

        setShopsName(data)
    }

    async function getCouponsData(apiEndPoint) {
        const res = await fetch(`https://api.cashclub.ro/api/coupons?page=1&perPage=40${apiEndPoint}`);
        const data = await res.json();

        setCoupons(data.data);
    }

    useEffect(() => {
        getShopData();
        getCouponsData("");
    },[]);

    async function setCouponsDisplay(apiEndPoint) {
        const res = await fetch(`https://api.cashclub.ro/api/coupons?${apiEndPoint}`);
        const data = await res.json();

        setConcatCoupons(data.data)
    }

    useEffect(()=> {
        setCoupons(coupons.concat(concatCoupons))
    },[concatCoupons]);

    function setExtendedCoupons() {
        setCouponsDisplay("pageNumber=2&perPage=40");
        setDisableButton(!disableButton);
    }

    function sortSpecial(e) {
        getCouponsData(e)
    }

    const couponsDisplayElement = coupons.map((element,i) => {
        return (
            <CouponsCardDisplay 
            key = {i}
            logo = {element.shopLogo}
            title = {element.title}
            />
        )
    })

    return (
        <div className="mainContainer">
            <h2>Cupoane reducere</h2>
            <p>Coduri de reducere exclusive la magazinele 
            partenere. Acestea se aplica pe cosul de cumparaturi inainte de finalizarea comenzii.</p>
            
            <CouponsCardSort 
            couponsName = {shopsName}
            endPointvalue = {(e) => sortSpecial(e.target.value)}
            endPointId = {(e) => {sortSpecial(`&filters[shopId]=${e}`); setDisableButton(true)}}
            />

            <div className="couponsWrapper">
                <div className="couponsList">

                    {couponsDisplayElement}

                    <button 
                    className="generalButtons read-moreBTN"
                    onClick={()=> setExtendedCoupons()}
                    disabled= {disableButton}
                    style = {!disableButton ? {opacity:1} : {opacity:0.3}}
                    >Mai multe cupoane</button>
                </div>
            </div>
        </div>
        )
}