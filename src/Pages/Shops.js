import React, {useState,useEffect} from "react";
import ShopSort from "../Components/ShopSort";
import ShopCardDisplay from "../Components/ShopCardDisplay"

export default function Shops() {
    const [categoriesName, setCategoriesName] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [idSelected, setIdSelected]  =useState();

    async function getCategoriesName() {
        const res = await fetch("https://api.cashclub.ro/api/categories?pageNumber=1");
        const data = await res.json();

        setCategoriesName(data.data);
    }

    async function getCategoriesData() {
        const res = await fetch(`https://api.cashclub.ro/api/shops?pageNumber=1&perPage=40`);
        const data = await res.json();

        setCategoriesData(data.data);
    }

    useEffect(()=> {
        getCategoriesName();
        getCategoriesData();
    },[]);

    console.log(categoriesName);
    console.log(categoriesData);
    console.log(idSelected)

    const couponsDisplayElement = categoriesData.map((element,i) => {
        if (idSelected === undefined){
            return (
                <ShopCardDisplay 
                key = {i}
                logo = {element.logo}
                discount = {element.cashbackValue}
                />
            )
        }else{
            if (element.categoryId === idSelected) 
            return (
                <ShopCardDisplay 
                key = {i}
                logo = {element.logo}
                discount = {element.cashbackValue}
                />
            )
        }  
    })

    return (
        <div className="mainContainer">
            <h2>Magazine partenere</h2>
            <p>Exploreaza noi produse si servicii in cele 800 de magazine partenere si bucura-te 
                de bonusurile obtinute, cu fiecare sesiune de cumparaturi online.</p>
                <ShopSort 
                categoriesName = {categoriesName}
                idSelected = {(e)=> setIdSelected(e.target.value)}
                />

                {couponsDisplayElement}
        </div>
    )
}