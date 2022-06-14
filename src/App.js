import React, { useEffect, useState } from 'react';
import './App.css';
import './main.3f6952e4.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './pages/Project';
import Projects from './components/Projects';

const projects = [
  { slug: "marketlyst", src: "https://www.marketlyst.com", title: "Marketlyst", text: "A software as a service platform built to cater to the manufacturing industry.", paragraph1: 'MarketLyst is a software-as-a-service (SaaS) platform that handles custom manufacturer orders and allows for the granular management of machines on an hour-by-hour basis.', paragraph2: 'The website is built using React JS with a serverless architecture implementing Python and Node JS lambda functions as well as AWS S3 and DynamoDB for data storage. Developed entirely using React Hooks. The PayPal Smart Button and Payout API has been implemented to orchestrate payments and payouts, and the Shippo API to handle shipping and label requirements.', quote: 'I fully understand what it is now and what all the excitement is about.', quoted: 'An Early MarketLyst Adopter', index: 1  },
  { slug: "thenationaldex", src: "https://www.thenationaldex.com", title: "National Dex", text: "A wiki that simplifies data to only get what you need when you need it.", paragraph1: 'TheNationalDex is a wiki that scrapes the useful information from Bulbapedia and displays it in a more useful and effecient manner, making it easier to find the information required quicker.', paragraph2: 'The website is built using React JS with a serverless architecture implementing a Node JS lambda function.', quote: 'So much simpler than Bulbapedia', quoted: 'User of TheNationalDex', index: 2  },
  // { slug: "sojourn-group", src: "https://www.sojourn-group.net", title: "Sojourn-Group", text: "An e-commerce platform and storefront", paragraph1: 'Sojourn-Group is an e-commerce platform and storefront built to sell the product lines put out by the Sojourn-Group.', paragraph2: 'The website is built using React JS with a serverless architecture implementing Node JS lambda functions. Developed entirely using React Hooks.', quote: 'A much needed replacement to our original WordPress site', quoted: 'Owner of Sojourn-Group', index: 3  },
  // { slug: "titantamer", src: "https://www.titantamer.com", title: "Titan Tamer", text: "", paragraph1: '', paragraph2: '', quote: '', quoted: '', index: 4  },
  // { slug: "qpointresearch", src: "https://www.qpointresearch.com", title: "Q-Point Research", text: "", paragraph1: '', paragraph2: '', quote: '', quoted: '', index: 5 },
];

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  // Start of Hook for mobile styling
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  // End of Hook for mobile styling

  const isMobile = width <= 768;

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route exact path="/" element={<Home projects={projects} isMobile={isMobile} />} />
        <Route exact path="/projects" element={<Projects projects={projects} isMobile={isMobile} />} />
        {['/projects/:slug', '/:slug'].map((path, index) => <Route key={index * 101} exact path={path} element={<Project projects={projects} isMobile={isMobile} />} />)}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
