import React, {useRef, useState, useEffect} from "react";
import DownloadSection from "./Sections/DownloadSection";
import MainSection from "./Sections/MainSection";
import CashBackSection from "./Sections/CashBackSection";
import DiscountSection from "./Sections/DiscountSection";
import CashClub from "./Sections/CashClubSection";
import QuestionsSection from "./Sections/QuestionsSection";
import ComparatorSection from "./Sections/ComparatorSection";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Main()  {
    const [showTopBtn,setShowTopBtn] = useState(false)
    const myRef = useRef(null);
    const mediaMatches = useMediaQuery('(min-width:780px)');
    
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 400) {
                setShowTopBtn(true);
            }else {
                setShowTopBtn(false);
            }
        })
    },[]);

    function btnScrollTop() {
        window.scrollTo({top: 0 , behavior:"smooth"})
    }

    return (
        <div>
            <DownloadSection 
            mediaMatches = {mediaMatches}
            />
            <MainSection 
            clickCashClub = {myRef}
            mediaMatches = {mediaMatches}
            />
            <CashBackSection />
            <ComparatorSection 
            mediaMatches = {mediaMatches}
            />
            <DiscountSection />
            <CashClub 
            myRef = {myRef}
            mediaMatches = {mediaMatches}
            title = {"CashClub pe mobil"}
            />
            <QuestionsSection />
            {showTopBtn && <div className="scroll-top-btn">
                <button className="scrollButton" onClick={btnScrollTop}></button>
            </div>}
        </div>
    )
}