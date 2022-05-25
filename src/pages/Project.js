import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Iframe from "../components/Iframe";
import MetaTags from 'react-meta-tags';

let heroBanner = "https://images.ctfassets.net/3evcwiqy7vzh/5C17A38n2kuB9iwf83sdfk/49e926281a6987b2b5d470ddf77d64f9/cherry-blossoms.jpg";

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

    let metaData = {
        image: heroBanner,
        title: "Tanner's Portfolio",
        description: `Featured Project: ${selectedProject.title}`,
        type: "website",
        width: "400",
        height: "300",
        alt: "Tidal Basin in Washington D.C.",
        url: "https://www.twmportfolio.com"
    };

    return(
        <div className="section-container">
            <MetaTags>
                <meta id="fb-app_id" property="fb:app_id" content="966242223397117" />
                <meta id="og-description" property="og:description" content={metaData.description} />
                <meta id="og-url" property="og:url" content={metaData.url} />
                <meta id="og-title" property="og:title" content={metaData.title} />
                <meta id="og-type" property="og:type" content={metaData.type} />
                <meta id="og-image" property="og:image" content={metaData.image} />
                <meta id="og-image-secure-url" property="og:image:secure_url" content={metaData.image} />
                <meta id="og-image-width" property="og:image:width" content={metaData.width} />
                <meta id="og-image-height" property="og:image:height" content={metaData.height} />
                <meta id="og-image-alt" property="og:image:alt" content={metaData.alt} />
            </MetaTags>
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