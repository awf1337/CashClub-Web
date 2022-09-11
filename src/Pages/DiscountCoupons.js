import React, {useState,useEffect} from "react";
import CouponsCard from "../Components/CouponsCardSort";
import CouponsCardDisplay from "../Components/CouponsCardDisplay";

export default function DiscountCoupons() {
    const [coupons,setCoupons] = useState([])
    const [shopsName,setShopsName] = useState([])

    async function getShopData() {
        const res = await fetch("https://api.cashclub.ro/api/coupons/shops");
        const data = await res.json();

        setShopsName(data.map((e) => e.name))
    }

    async function getCouponsData() {
        const res = await fetch("https://api.cashclub.ro/api/coupons?page=1&perPage=40");
        const data = await res.json();

        setCoupons(data.data);
    }

    useEffect(() => {
        getShopData();
        getCouponsData();
    },[])

    console.log(coupons)

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
            
            <CouponsCard 
            couponsName = {shopsName}
            />
            <div className="couponsWrapper">
                <div className="couponsList">
                    {couponsDisplayElement}
                </div>
            </div>
        </div>
        )
}