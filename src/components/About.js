import React from "react";
import Headshot from "../images/headshot.jpg"
import SecPlus from "../images/comptia-security-ce-certification.png";

export default function About() {
    return(
        <div id="about" style={{ "minHeight": "95vh", "display": "flex", "alignItems": "center" }} className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center">
                            <h1 className="h2">About me</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <h3>I'm Tanner Metzmeier<a href="https://www.credly.com/badges/26952945-3b14-45f1-813a-4e3ddf4a842c/public_url" target="_blank" rel="noreferrer" ><img style={{ "marginLeft": "10px" }} src={SecPlus} alt="Security+ Certification Badge" /></a></h3>
                                        <p>
                                            I'm a Senior Systems Integration Analyst by day and a Fullstack Developer by night 
                                            with experience handling large multi-million-dollar systems as well as standing up systems from scratch,
                                            turning ideas into products. 
                                        </p>
                                        <h3>Diverse Background</h3>
                                        <p>
                                            My background in Software Development, Cybersecurity, Infrastructure as Code (IaC), 
                                            Cloud, and Embedded Systems makes me an ideal candidate to handle any part of the tech stack.
                                        </p>
                                        <h3>Lifelong Learner</h3>
                                        <p>
                                            I am fueled by my passion for creating and learning, bringing ideas to life and progressing my understanding. 
                                            I am always eager to learn about the newest technologies and build my academic foundation through courses and certificates.
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <img style={{ "filter": "grayscale(55%)" }} src={Headshot} className="img-responsive" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}