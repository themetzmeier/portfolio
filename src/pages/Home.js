import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

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

  return(
    <>
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