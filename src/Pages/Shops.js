import React, {useState,useEffect} from "react";
import ShopSort from "../Components/ShopSort";
import ShopCardDisplay from "../Components/ShopCardDisplay"

export default function Shops() {
    const [categoriesName, setCategoriesName] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [idSelected, setIdSelected]  = useState();
    const [searchField, setSearchField] = useState("");
    const [displaySearch, setDisplaySearch] = useState([]);

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

    function setDisplayBySearch(e) {
        const filteredCategoriesData = categoriesData.filter(item => item.name===e);
        setDisplaySearch(filteredCategoriesData);
    }

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
        return null;
    })

    const couponsDisplayBySearch = displaySearch.map((e,i) => {
        return (
            <ShopCardDisplay
                key = {i}
                logo = {e.logo}
                discount = {e.cashbackValue}
            />
        )
    })

    return (
        <div className="mainContainer">
            <div className="shopText">
                <h2>Magazine partenere</h2>
                <p>Exploreaza noi produse si servicii in cele 800 de magazine partenere si bucura-te 
                    de bonusurile obtinute, cu fiecare sesiune de cumparaturi online.</p>
            </div>
            
            <ShopSort 
                categoriesName = {categoriesName}
                idSelected = {(e) => {setIdSelected(e.target.value); setDisplaySearch([])}}
                valueField = {(e) => setSearchField(e.target.value)}
                cleanField = {() => setSearchField("")}
                shopList = {categoriesData}
                inputValue = {searchField}
                setDataDisplay = {(e) => setDisplayBySearch(e)}
            />
            <div className="gridDisplayCard">
                {displaySearch.length !== 0 ? couponsDisplayBySearch : couponsDisplayElement}
            </div>
                
        </div>
    )
}