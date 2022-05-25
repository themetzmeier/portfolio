import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isMobile }) {
    const location = useLocation();
    const [toggleButton, setToggleButton] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollStyle, setScrollStyle] = useState({});
  
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    useEffect(() => {
        if(!isMobile && ((location.pathname === "/" && scrollPosition >= 730) || (location.pathname !== "/" && scrollPosition >= 20))) {
            setScrollStyle({ "backgroundColor": "white" });
        } else {
            setScrollStyle({});
        }
    }, [location, scrollPosition, isMobile]);

    const scrollTo = (anchorId) => {
        // console.log(anchorId);
        let anchorItem = document.getElementById(anchorId);
        if(anchorItem) {
            anchorItem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleToggle = (toggle) => {
        if(toggle) {
            document.querySelector("#navbar-collapse").className = 'navbar-collapse collapse in';
        } else {
            document.querySelector("#navbar-collapse").className = 'collapse navbar-collapse';
        }
        setToggleButton(toggle);
    }
    
    return(
        <nav className="navbar navbar-fixed-top navbar-inverse">
            <div className="container">
                <button type="button" className="navbar-toggle collapsed" onClick={() => handleToggle(!toggleButton)} data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <div style={isMobile ? {} : { "float": "right" }} className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav" style={{ ...scrollStyle }}>
                        <li><Link to="/" style={toggleButton ? {} : { "color": "black", "borderRight": "1px solid black" }} onClick={() => scrollTo("home")}>Home</Link></li>
                        <li><Link to="/#projects" style={toggleButton ? {} : { "color": "black", "borderRight": "1px solid black" }} onClick={() => scrollTo("projects")}>Projects</Link></li>
                        <li><Link to="/#about" style={toggleButton ? {} : { "color": "black", "borderRight": "1px solid black" }} onClick={() => scrollTo("about")}>About me</Link></li>
                        <li><Link to="/#contact" style={toggleButton ? {} : { "color": "black" }} onClick={() => scrollTo("contact")}>Contact</Link></li>
                    </ul>
                </div> 
            </div>
        </nav>
    );
}