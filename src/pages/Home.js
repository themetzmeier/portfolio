import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import MetaTags from 'react-meta-tags';

// Contentful Links to various images used on the portfolio
let heroBanner = "https://images.ctfassets.net/3evcwiqy7vzh/5C17A38n2kuB9iwf83sdfk/49e926281a6987b2b5d470ddf77d64f9/cherry-blossoms.jpg";
// let headshot = "https://images.ctfassets.net/3evcwiqy7vzh/6SybNLXnXkXRy0nbnG1Sht/7a305056f9164da8758c329ac66c71eb/headshot.jpg";
// let secPlus = "https://images.ctfassets.net/3evcwiqy7vzh/1ysA2dBURN3JCajingd7Ju/1bcdf597bf6da23c5f34dc3a670ded40/comptia-security-ce-certification.png";

export default function Home({ projects, isMobile }) {
  const location = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);
  
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
    if(scrollPosition >= 2200) {
      document.title = 'Contact';
    } else if (scrollPosition >= 1350) {
      document.title = 'About Me';
    } else if (scrollPosition >= 720) {
      document.title = 'Projects';
    } else {
      document.title = 'Metzmeier Portfolio';
    }
  }, [scrollPosition]);

  useEffect(() => {
    if(location.hash) {
      let anchorId = location.hash.split('#')[1];
      scrollTo(anchorId);
    }
  }, [location])

  const scrollTo = (anchorId) => {
    // console.log(anchorId);
    let anchorItem = document.getElementById(anchorId);
    if(anchorItem) {
        anchorItem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let metaData = {
    image: heroBanner,
    title: "Tanner's Portfolio",
    description: "Checkout my work, compiled here for your ease of viewing.",
    type: "website",
    width: "400",
    height: "300",
    alt: "Tidal Basin in Washington D.C.",
    url: "https://www.twmportfolio.com"
  };

  return(
    <>
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
      <div id="site-border-left"></div>
      <div id="site-border-right"></div>
      <div id="site-border-top"></div>
      <div id="site-border-bottom"></div>
      <Hero isMobile={isMobile} />
      <Projects projects={projects} isMobile={isMobile} />
      <About />
      <Contact isMobile={isMobile} />
    </>
  );
}