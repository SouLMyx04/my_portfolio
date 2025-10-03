import React, { useRef } from "react";

const Navi = () => {
    const navMenuRef = useRef(null); // Create a reference

    /* Menu show */
    const navToggle = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.add('show-menu');
        }
    };

    /* Menu hidden */
    const navClose = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.remove('show-menu');
        }
    };

    return (
        <div className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Raffy Aclan</a>   
                
                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={navClose}><span>Home</span></a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={navClose}><span>About</span></a>
                        </li>
                        <li className="nav__item">
                            <a href="#skill" className="nav__link" onClick={navClose}><span>Skill</span></a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className="nav__link" onClick={navClose}><span>Projects</span></a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={navClose}><span>Contact</span></a>
                        </li>
                    </ul>

                    {/* Close Button */}
                    <div className="nav__close" id="nav-close" onClick={navClose}>
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>

                {/* Toggle button */}
                <div className="nav__toggle" id="nav-toggle" onClick={navToggle}>
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </div>
    );
};

export default Navi;

