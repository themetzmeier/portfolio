import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Iframe from "./Iframe";

export default function Projects({ projects, isMobile }) {
    const [displayProjects, setDisplayProjects] = useState('');
    const [middleIndex, setMiddleIndex] = useState(0);

    const prevItem = () => {
        if(projects.length > 3) {
            let newMiddleIndex = middleIndex - 1;
            if(newMiddleIndex === projects.length) {
                newMiddleIndex = 0;
            } else if (newMiddleIndex < 0) {
                newMiddleIndex = projects.length - 1;
            }
            let firstIndex = newMiddleIndex - 1;
            if(firstIndex < 0) {
                firstIndex = projects.length - 1;
            }
            let lastIndex = newMiddleIndex + 1;
            if(lastIndex === projects.length || newMiddleIndex === projects.length - 1) {
                lastIndex = 0;
            }
            // console.log(`projects[${firstIndex}], projects[${newMiddleIndex}], projects[${lastIndex}]]`)
            setDisplayProjects([projects[firstIndex], projects[newMiddleIndex], projects[lastIndex]]);
            setMiddleIndex(newMiddleIndex);
        }
    };

    const nextItem = () => {
        if(projects.length > 3) {
            let newMiddleIndex = middleIndex + 1;
            if(newMiddleIndex === projects.length) {
                newMiddleIndex = 0;
            }
            let firstIndex = newMiddleIndex - 1;
            if(firstIndex < 0) {
                firstIndex = projects.length - 1;
            }
            let lastIndex = newMiddleIndex + 1;
            if(lastIndex === projects.length) {
                lastIndex = 0;
            }
            // console.log(`projects[${firstIndex}], projects[${newMiddleIndex}], projects[${lastIndex}]]`)
            setDisplayProjects([projects[firstIndex], projects[newMiddleIndex], projects[lastIndex]]);
            setMiddleIndex(newMiddleIndex);
        }
    }

    useEffect(() => {
        if(projects.length > 3) {
            let newMiddleIndex = 1;
            setDisplayProjects([projects[newMiddleIndex - 1],  projects[newMiddleIndex], projects[newMiddleIndex + 1]]);
            setMiddleIndex(newMiddleIndex);
        } else {
            setDisplayProjects(projects);
        }
    }, [projects])

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
                                        {displayProjects && displayProjects.length > 0 ? (
                                            <>
                                                {displayProjects.map((project, tempIndex) => {
                                                    return(
                                                        <div key={tempIndex} className="col-sm-4">
                                                            <Link to="/project" title="" className="black-image-project-hover">
                                                                <img src="./assets/images/work01-hover.jpg" alt="" className="img-responsive" />
                                                            </Link>
                                                            <Iframe src={project.src} title={project.title} height={500} scale={0.35} scrolling="no" />
                                                            <div className="card-container card-container-lg">
                                                                <h4>00{project.index}/00{projects.length}</h4>
                                                                <h3>{project.title}</h3>
                                                                <p style={isMobile ? {} : { "minHeight": "100px" }}>{project.text}</p>
                                                                <Link to={`/projects/${project.slug}`} title="" className="btn btn-default">Discover</Link>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </>
                                        ) : null}
                                        
                                    </div>
                                </div>
                            </div>
                            {projects.length > 3 ? (
                                <>
                                    <button className="left carousel-control" onClick={() => prevItem()}>‹</button>
                                    <button className="right carousel-control" onClick={() => nextItem()} >›</button>
                                </>
                            ): null}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}