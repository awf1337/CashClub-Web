import React, { useState, useEffect } from "react";

const ContextTest = React.createContext();

function ContextProvider(props) {
    const [showTopBtn,setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                setShowTopBtn(true);
            }else {
                setShowTopBtn(false);
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    },[]);

    return (
        <ContextTest.Provider>
            {props.children}

            <div className="scroll-top-btn">
                {showTopBtn && 
                    <button 
                    className="scrollButton" 
                    onClick={ () => window.scrollTo({top: 0 , behavior:"smooth"}) }>
                    </button>
                }
            </div>
        </ContextTest.Provider>     
    )
}

export {ContextProvider, ContextTest}