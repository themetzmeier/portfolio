import CherryBlossoms from "../images/cherry-blossoms.jpg";
import React, { useEffect } from "react";
import TypeWriter from "./TypeWriter";

export default function Hero({ isMobile }) {
    useEffect(() => {

    }, [])

    return(
        <div id="home" className="hero-bcg hero-full-container background-image-container white-text-container" style={{ "backgroundImage": `url(${CherryBlossoms})`, "filter": "grayscale(75%)" }}>
            <div className="container">
            <div className="row">
                <div className="col-xs-12">
                <div className="hero-full-wrapper">
                    <div style={isMobile ? { "maxWidth": "100px" } : {}} className="text-content">
                        <TypeWriter style={{ "height": "180px" }} words={["I'm Tanner Metzmeier", "Web Developer", "Cyber Security Specialist", "Cloud Expert"]} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}