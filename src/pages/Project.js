import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Iframe from "../components/Iframe";

export default function Project({ projects }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { slug } = useParams();
    let index = '';
    projects.forEach((project, tempIndex) => {
        if(project.slug === slug) {
            index = tempIndex
        }
    });
    let selectedProject = projects.filter((project) => project.slug === slug);
    selectedProject = selectedProject[0];
    // console.log(selectedProject);
    document.title = selectedProject.title;

    return(
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div style={{ "overflow": "hidden" }} className="col-xs-12">
                        <Iframe src={selectedProject.src} title={selectedProject.title} height={1000} width={2300} scrolling="no" className="img-responsive" />
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">{selectedProject.title} : 00{index + 1}</h1>
                            </div>
                            <p>
                                {selectedProject.paragraph1}
                            </p>
                            <p>
                                {selectedProject.paragraph2}
                            </p>
                            <blockquote>
                                <p>"{selectedProject.quote}"</p>
                                <small className="pull-right">{selectedProject.quoted}</small>
                            </blockquote>
                            <a style={{ "marginTop": "16px" }} href={`${selectedProject.src}`} target="_blank" rel="noopener noreferrer" className="btn btn-default">Visit</a>
                        </div>
                    </div>
                    {/* <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <img src="./assets/images/work001-02.jpg" className="img-responsive" alt="" />
                            <p>Menphis skyline</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <img src="./assets/images/work001-03.jpg" className="img-responsive" alt="" />
                            <p>Menphis skyline</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <img src="./assets/images/work001-04.jpg" className="img-responsive" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}