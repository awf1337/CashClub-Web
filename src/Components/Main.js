import React, {useRef} from "react";
import DownloadSection from "./Sections/DownloadSection";
import MainSection from "./Sections/MainSection";
import CashBackSection from "./Sections/CashBackSection";
import DiscountSection from "./Sections/DiscountSection";
import CashClub from "./Sections/CashClubSection";
import QuestionsSection from "./Sections/QuestionsSection";
import ComparatorSection from "./Sections/ComparatorSection"

export default function Main()  {
    const myRef = useRef(null)
    
    return (
        <div>
            <DownloadSection />
            <MainSection 
            clickCashClub = {myRef}
            />
            <CashBackSection />
            <ComparatorSection />
            <DiscountSection />
            <CashClub 
            myRef = {myRef}
            />
            <QuestionsSection />
        </div>
    )
}