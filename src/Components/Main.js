import React, {useRef} from "react";
import DownloadSection from "./Sections/DownloadSection";
import MainSection from "./Sections/MainSection";
import CashBackSection from "./Sections/CashBackSection";
import DiscountSection from "./Sections/DiscountSection";
import CashClub from "./Sections/CashClubSection";
import QuestionsSection from "./Sections/QuestionsSection";
import ComparatorSection from "./Sections/ComparatorSection";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Main()  {
    const myRef = useRef(null);
    const mediaMatches = useMediaQuery('(min-width:780px)');
    
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
            <ComparatorSection />
            <DiscountSection />
            <CashClub 
            myRef = {myRef}
            mediaMatches = {mediaMatches}
            />
            <QuestionsSection />
        </div>
    )
}