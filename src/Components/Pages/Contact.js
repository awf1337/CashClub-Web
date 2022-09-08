import React from "react";

export default function Contact() {
    return (
        <div className="mainContainer">
            <h1>Contact</h1>
            <div className="contactPageFlex">
                <div className="contactInfo">
                    <h3>Contact Info</h3>
                    <span>VAN CONSULTING SERVICES S.R.L.</span>
                    <span>Cui: 3974XXXX</span>
                    <span>Reg. Com.: J40/XXXX/10.01.2000</span>
                    <span>ING BANK RO44INGB0000XXXXX827XXXX</span>
                    <br/>
                    <span>Aleea Banul Udrea, Nr.2</span>
                    <span>Bucuresti 031278, Romania</span>
                    <span>contact@cashclub.ro</span>
                    <a href="tel:0799 185 67X">0799 185 67X</a>
                </div>

                <div className="contactInput">
                    <input type="text" name="name" placeholder="Nume" required></input>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <input type="text" name="subject" placeholder="Subiect" required></input>
                    <textarea type="text" name="message" placeholder="Adauga mesaj" required style={{height:"181px",width:"100%"}} />
                    <button name="submit" className="generalButtons">Send</button>
                </div>
            </div> 
        </div>
    )
}