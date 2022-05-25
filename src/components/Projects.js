import React from "react";
import { Link } from "react-router-dom";
import Iframe from "./Iframe";

export default function Projects({ projects, isMobile }) {
    return(
        <div id="projects" style={{ "minHeight": "92.5vh", "display": "flex", "alignItems": "center" }} className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
                        <div className="text-center">
                            <h1 className="h2">Projects</h1>
                            <p>
                                I design, develop, build, and deliver websites that are sleek simple and elogant.
                                Delivering a product that appeals to the most amount of users and doesn't sacrifice engagement for aesthetic.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide projects-carousel">
                            {/* Carousel items */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        {projects.map((project, index) => {
                                            return(
                                                <div key={index} className="col-sm-4">
                                                    <Link to="/project" title="" className="black-image-project-hover">
                                                        <img src="./assets/images/work01-hover.jpg" alt="" className="img-responsive" />
                                                    </Link>
                                                    <Iframe src={project.src} title={project.title} height={500} scale={0.35} scrolling="no" />
                                                    <div className="card-container card-container-lg">
                                                        <h4>00{index + 1}/00{projects.length}</h4>
                                                        <h3>{project.title}</h3>
                                                        <p style={isMobile ? {} : { "minHeight": "100px" }}>{project.text}</p>
                                                        <Link to={`/projects/${project.slug}`} title="" className="btn btn-default">Discover</Link>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

                            <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}