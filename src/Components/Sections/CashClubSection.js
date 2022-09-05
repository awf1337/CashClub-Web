import React, {useState} from "react";
import ImageCashClubMobil from "./Images/cashClubMobil.png"

export default function CashClub(props) {
    const [phoneNo, setPhoneNo] = useState('');

    return (
        <section 
        className="cashClubContainer mainContainer"
        ref={props.myRef}
        >
            <div className={props.mediaMatches ? "cashClubFlex" : ""}>
                <div className={props.mediaMatches ? "cashClubText" : ""}>
                    <h3>CashClub pe mobil</h3>
                    <p> Descarca aplicatia pe mobil si printr-un simplu click ai acces la 800 de magazine, 
                        milioane de produse si mii de bonusuri.</p>
                        {props.mediaMatches &&
                            <form>
                                <input 
                                    className="cashClubInput"
                                    value={phoneNo} 
                                    onChange={(e) => setPhoneNo(e.target.value)} 
                                />
                                <button 
                                    className="generalButtons cashClubsubmit"
                                >Descarca Aplicatia</button>
                            </form>
                        }
                </div>
                <img src={ImageCashClubMobil} alt="This application on a mobile display"/>
            </div>
            
            {!props.mediaMatches &&
                <a 
                    href="https://play.google.com/store/apps/details?id=m.cashclub.ro" 
                    className="generalButtons"
                    target="_blank"
                >Descarca</a>
            }
        </section>
    )
}