import React from "react";
import downloadImage from "../../Assets/Images/downloadImage.png";

export default function DownloadSection(props) {
    
    return (
        <section className="mainContainer downloadContainer">
            <div className="downloadContainerMain">
                <h2>Descarca aplicatia de mobil si economiseste bani facand cumparaturi!</h2>
                <div>
                    {!props.mediaMatches && 
                        <p>Platforma de CashBack</p>
                    }
                    <a 
                        className="generalButtons" 
                        href={props.mediaMatches ? "https://chrome.google.com/webstore/detail/cashclub/bmcjeckemmdkoapcmpmffabkelgknlme?hl=ro&fbclid=IwAR1eIJFJ9Sh4XHeyDL1FkrQFIdTZKB35DO4NHmfDGxYjrwcS_aJZCCjOTy0"
                            : "https://play.google.com/store/apps/details?id=m.cashclub.ro"}
                        target="_blank"
                    >{props.mediaMatches ? "Descarca Extensia" : "Descarca Aplicatia"}</a>
                    {props.mediaMatches && 
                        <a 
                        className="generalButtons downloadButton" 
                        href="#"
                        >Afla mai multe</a>
                    }
                </div>
                
            </div>

            {props.mediaMatches &&
                <img src={downloadImage} alt="Google chrome web store with cashclub application"/>
            }       
        </section>
    )
}