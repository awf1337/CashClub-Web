import React from "react";

export default function Header() {

    function removeNavOpen(){
        document.body.classList.remove('nav-open');
    }

    return (
        <header>
            <h1><a href="/">CashClub</a></h1>

            <button 
            className="nav-toggle" 
            aria-label="toggle navigation"
            onClick={() => document.body.classList.toggle('nav-open')}
            >
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <span>CashClub</span>
                <ul className="nav__list">
                    <li className="nav__item" >
                        <a href="/login" className="nav__link" onClick={() => removeNavOpen()}>Autentificare</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/cashback" className="nav__link" onClick={() => removeNavOpen()}>Cashback</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/products" className="nav__link" onClick={() => removeNavOpen()}>Comparator de preturi</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/shops" className="nav__link" onClick={() => removeNavOpen()}>Magazine</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/coupons" className="nav__link" onClick={() => removeNavOpen()}>Cupoane reducere</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/contact" className="nav__link" onClick={() => removeNavOpen()}>Contact</a>
                    </li>
                    <li className="nav__item" >
                        <a href="/frequent-questions" className="nav__link" onClick={() => removeNavOpen()}>Intrebari frecvente</a>
                    </li>     
                </ul>
            </nav>
        </header>
    )
}