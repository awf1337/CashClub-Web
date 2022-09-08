import React from "react";
import mediaFacebook from "./Sections/Images/mediaFacebook.png"
import mediaInstagram from "./Sections/Images/mediaInstagram.png"
import mediaLinkedIn from "./Sections/Images/mediaLinkedin.png"

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="socialFooterContainer">
                <a href="https://www.facebook.com/cashclub.ro/" target="_blank" rel="noopener noreferrer">
                    <img src={mediaFacebook} alt="Facebook Icon"/>
                </a>
                <a href="https://www.instagram.com/cashclub.ro/" target="_blank" rel="noopener noreferrer">
                    <img src={mediaInstagram} alt="Instagram Icon"/>
                </a>
                <a href="https://www.linkedin.com/company/cashclub/about/" target="_blank" rel="noopener noreferrer">
                    <img src={mediaLinkedIn} alt="LinkedIn Icon"/>
                </a> 
            </div>
            
            <div className="dataFooterContainer">
                <p>ANPC</p>
                <p>VAN CONSULTING SERVICES S.R.L.</p>
                <p>CUI: 39743787</p>
                <p>Copyright 2020 CashClub</p>
            </div>
        </div>
    )
}